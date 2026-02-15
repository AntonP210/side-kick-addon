/**
 * Generate PNG icons from SVG using the canvas API.
 * Run in a browser console or use a tool like sharp/canvas if available.
 *
 * For now, the extension uses the SVG icon directly.
 * To generate PNGs, you can use any online SVG-to-PNG converter
 * or install `sharp`:
 *
 *   npm install sharp --save-dev
 *   node scripts/generate-icons.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const svgPath = join(root, 'public', 'icons', 'icon.svg');

async function generate() {
  try {
    const sharp = (await import('sharp')).default;
    const svg = readFileSync(svgPath);

    for (const size of [16, 48, 128]) {
      await sharp(svg)
        .resize(size, size)
        .png()
        .toFile(join(root, 'public', 'icons', `icon-${size}.png`));
      console.log(`Generated icon-${size}.png`);
    }
  } catch {
    console.log('sharp not installed. Creating placeholder PNGs...');
    console.log('Install sharp for real PNG generation: npm install sharp --save-dev');
    console.log('For now, the extension will use the SVG icon.');

    // Create minimal 1x1 transparent PNGs as placeholders
    // These are valid PNGs that Chrome/Firefox will accept
    const minimalPng = Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
      'base64',
    );

    for (const size of [16, 48, 128]) {
      writeFileSync(join(root, 'public', 'icons', `icon-${size}.png`), minimalPng);
      console.log(`Created placeholder icon-${size}.png`);
    }
  }
}

generate();
