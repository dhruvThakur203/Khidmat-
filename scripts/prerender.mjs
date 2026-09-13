/**
 * Post-build static prerender for indexable routes.
 * Renders each route in headless Chromium so crawlers receive meaningful HTML,
 * route-specific metadata, and visible page content without relying on JS alone.
 */
import { chromium } from 'playwright';
import { spawn, execSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');
const port = Number(process.env.PRERENDER_PORT) || 4173;
const host = process.env.PRERENDER_HOST || '127.0.0.1';
const baseUrl = `http://${host}:${port}`;
const previewReadyMs = Number(process.env.PRERENDER_READY_TIMEOUT_MS) || 90_000;

const routes = JSON.parse(
  await readFile(join(__dirname, 'prerender-routes.json'), 'utf8'),
);

if (process.env.SKIP_PRERENDER === '1') {
  console.log('SKIP_PRERENDER=1 — skipping prerender step.');
  process.exit(0);
}

function ensurePlaywrightBrowser() {
  if (process.env.SKIP_PLAYWRIGHT_INSTALL === '1') return;
  try {
    console.log('Ensuring Playwright Chromium is available…');
    execSync('npx playwright install chromium', {
      cwd: root,
      stdio: 'inherit',
      env: { ...process.env, PLAYWRIGHT_BROWSERS_PATH: process.env.PLAYWRIGHT_BROWSERS_PATH ?? '0' },
    });
  } catch (err) {
    console.warn('Playwright browser install warning:', err.message);
  }
}

async function waitForPreviewReady(url, maxMs) {
  const start = Date.now();
  let lastError = 'unknown';

  while (Date.now() - start < maxMs) {
    try {
      const response = await fetch(url, { redirect: 'manual' });
      if (response.ok || response.status === 304) return;
      lastError = `HTTP ${response.status}`;
    } catch (err) {
      lastError = err instanceof Error ? err.message : String(err);
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Preview server not ready at ${url} within ${maxMs}ms (last error: ${lastError})`);
}

function startPreview() {
  return new Promise((resolve, reject) => {
    const viteBin = join(root, 'node_modules', 'vite', 'bin', 'vite.js');
    const logs = [];

    const child = spawn(
      process.execPath,
      [viteBin, 'preview', '--port', String(port), '--strictPort', '--host', host],
      {
        cwd: root,
        stdio: ['ignore', 'pipe', 'pipe'],
        env: { ...process.env, NODE_ENV: 'production' },
      },
    );

    const capture = (chunk) => {
      const text = chunk.toString();
      logs.push(text);
      if (logs.length > 40) logs.shift();
    };

    child.stdout.on('data', capture);
    child.stderr.on('data', capture);
    child.on('error', reject);

    let settled = false;
    const fail = (error) => {
      if (settled) return;
      settled = true;
      if (!child.killed) child.kill('SIGTERM');
      const tail = logs.join('').trim();
      reject(new Error(`${error.message}${tail ? `\n\nPreview server output:\n${tail}` : ''}`));
    };

    child.on('exit', (code) => {
      if (!settled) fail(new Error(`Preview server exited with code ${code ?? 'unknown'}`));
    });

    waitForPreviewReady(`${baseUrl}/`, previewReadyMs)
      .then(() => {
        if (settled) return;
        settled = true;
        resolve(child);
      })
      .catch((err) => fail(err));
  });
}

function stopPreview(child) {
  return new Promise((resolve) => {
    if (!child || child.killed) return resolve();
    child.on('exit', () => resolve());
    child.kill('SIGTERM');
    setTimeout(() => {
      if (!child.killed) child.kill('SIGKILL');
      resolve();
    }, 3000);
  });
}

function outputPath(route) {
  if (route === '/') return join(dist, 'index.html');
  const segment = route.replace(/^\//, '');
  return join(dist, segment, 'index.html');
}

async function prerenderRoute(page, route) {
  const url = `${baseUrl}${route}`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 });
  await page.waitForSelector('#main-content h1', { timeout: 15_000 });

  const title = await page.title();
  const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
  const description = await page.locator('meta[name="description"]').getAttribute('content');
  const h1 = await page.locator('#main-content h1').first().textContent();

  if (!title || !description) {
    throw new Error(`Missing metadata on ${route}`);
  }

  const html = await page.content();
  const file = outputPath(route);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html, 'utf8');

  return { route, title, canonical, h1: h1?.trim() };
}

ensurePlaywrightBrowser();

console.log(`Prerendering ${routes.length} routes…`);

const preview = await startPreview();
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const page = await context.newPage();

const results = [];

try {
  for (const route of routes) {
    const result = await prerenderRoute(page, route);
    results.push(result);
    console.log(`  ✓ ${route} — ${result.title}`);
  }
} finally {
  await browser.close();
  await stopPreview(preview);
}

const report = {
  generatedAt: new Date().toISOString(),
  routes: results,
};

await writeFile(join(dist, 'prerender-report.json'), JSON.stringify(report, null, 2), 'utf8');
console.log('Prerender complete. Report: dist/prerender-report.json');
