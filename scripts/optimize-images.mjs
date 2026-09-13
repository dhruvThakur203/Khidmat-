/**
 * Optimise large catering images — creates WebP variants alongside originals.
 */
import sharp from 'sharp';
import { stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const cateringsDir = join(__dirname, '..', 'public', 'images', 'caterings');

const targets = [
  { input: 'celebration.jpg', output: 'celebration.webp', quality: 82 },
  { input: 'wedding caterings.jpg', output: 'wedding caterings.webp', quality: 82 },
];

for (const { input, output, quality } of targets) {
  const inputPath = join(cateringsDir, input);
  const outputPath = join(cateringsDir, output);

  try {
    await stat(inputPath);
  } catch {
    console.warn(`Skipping ${input} — file not found.`);
    continue;
  }

  const before = (await stat(inputPath)).size;
  await sharp(inputPath).webp({ quality, effort: 4 }).toFile(outputPath);
  const after = (await stat(outputPath)).size;
  const saved = Math.round((1 - after / before) * 100);
  console.log(`  ${input} → ${output} (${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB, −${saved}%)`);
}

console.log('Image optimisation complete.');
