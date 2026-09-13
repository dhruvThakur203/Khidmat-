/**
 * Post-build static prerender for indexable routes.
 * Renders each route in headless Chromium so crawlers receive meaningful HTML,
 * route-specific metadata, and visible page content without relying on JS alone.
 */
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');
const port = 4173;
const baseUrl = `http://localhost:${port}`;

const routes = JSON.parse(
  await readFile(join(__dirname, 'prerender-routes.json'), 'utf8'),
);

if (process.env.SKIP_PRERENDER === '1') {
  console.log('SKIP_PRERENDER=1 — skipping prerender step.');
  process.exit(0);
}

function startPreview() {
  return new Promise((resolve, reject) => {
    const viteBin = join(root, 'node_modules', 'vite', 'bin', 'vite.js');
    const child = spawn(process.execPath, [viteBin, 'preview', '--port', String(port), '--strictPort'], {
      cwd: root,
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, NODE_ENV: 'production' },
    });

    let resolved = false;
    const timeout = setTimeout(() => {
      if (!resolved) reject(new Error('Preview server did not start within 30s'));
    }, 30000);

    const onData = (chunk) => {
      const text = chunk.toString();
      if (text.includes('Local:') || text.includes(`localhost:${port}`)) {
        resolved = true;
        clearTimeout(timeout);
        resolve(child);
      }
    };

    child.stdout.on('data', onData);
    child.stderr.on('data', onData);
    child.on('error', reject);
    child.on('exit', (code) => {
      if (!resolved) reject(new Error(`Preview server exited with code ${code}`));
    });
  });
}

function stopPreview(child) {
  return new Promise((resolve) => {
    if (!child || child.killed) return resolve();
    child.on('exit', () => resolve());
    child.kill('SIGTERM');
    setTimeout(() => child.kill('SIGKILL'), 3000);
  });
}

function outputPath(route) {
  if (route === '/') return join(dist, 'index.html');
  const segment = route.replace(/^\//, '');
  return join(dist, segment, 'index.html');
}

async function prerenderRoute(page, route) {
  const url = `${baseUrl}${route}`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForSelector('#main-content h1', { timeout: 15000 });

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
console.log(`Prerender complete. Report: dist/prerender-report.json`);
