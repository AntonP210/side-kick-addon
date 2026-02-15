import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync, rmSync, createWriteStream } from 'fs';
import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { tmpdir } from 'os';
import archiver from 'archiver';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');

// 1. Build the extension
console.log('Building extension...');
execSync('npx tsc && npx vite build', { cwd: root, stdio: 'inherit' });

// 2. Read the BUILT manifest (has correct compiled paths) and Firefox overrides
const builtManifest = JSON.parse(readFileSync(join(distDir, 'manifest.json'), 'utf-8'));
const firefoxOverrides = JSON.parse(readFileSync(join(root, 'manifest.firefox.json'), 'utf-8'));

// 3. Copy dist to a temp staging area (avoids copying dist into its own subdirectory)
//    Exclude .vite/ directory (build artifact not needed in extension package)
const stagingDir = join(tmpdir(), 'sidekick-staging');
if (existsSync(stagingDir)) rmSync(stagingDir, { recursive: true });
mkdirSync(stagingDir, { recursive: true });
cpSync(distDir, stagingDir, {
  recursive: true,
  filter: (src) => !src.includes('.vite'),
});

// 4. Create Chrome output
const chromeDir = join(distDir, 'chrome');
if (existsSync(chromeDir)) rmSync(chromeDir, { recursive: true });
mkdirSync(chromeDir, { recursive: true });
cpSync(stagingDir, chromeDir, { recursive: true });

// 5. Create Firefox output with merged manifest
const firefoxDir = join(distDir, 'firefox');
if (existsSync(firefoxDir)) rmSync(firefoxDir, { recursive: true });
mkdirSync(firefoxDir, { recursive: true });
cpSync(stagingDir, firefoxDir, { recursive: true });

// Merge Firefox manifest: use built manifest as base, swap service_worker → scripts
const firefoxManifest = { ...builtManifest };
// Replace service_worker with scripts array pointing to the same loader
const swPath = firefoxManifest.background?.service_worker;
firefoxManifest.background = { scripts: [swPath], type: 'module' };
// Add Firefox-specific settings
firefoxManifest.browser_specific_settings = firefoxOverrides.browser_specific_settings;
writeFileSync(
  join(firefoxDir, 'manifest.json'),
  JSON.stringify(firefoxManifest, null, 2),
);

// Clean up staging
rmSync(stagingDir, { recursive: true });

// 6. Create ZIP files for store submission (using archiver for cross-platform forward-slash paths)
function createZip(sourceDir, zipPath) {
  return new Promise((resolve, reject) => {
    if (existsSync(zipPath)) rmSync(zipPath);
    const output = createWriteStream(zipPath);
    const archive = archiver('zip', { zlib: { level: 9 } });
    output.on('close', resolve);
    archive.on('error', reject);
    archive.pipe(output);
    archive.directory(sourceDir, false);
    archive.finalize();
  });
}

const chromeZip = join(distDir, 'sidekick-chrome.zip');
const firefoxZip = join(distDir, 'sidekick-firefox.zip');

await createZip(chromeDir, chromeZip);
await createZip(firefoxDir, firefoxZip);

console.log('');
console.log('Chrome build:  dist/chrome/');
console.log('Chrome ZIP:    dist/sidekick-chrome.zip');
console.log('Firefox build: dist/firefox/');
console.log('Firefox ZIP:   dist/sidekick-firefox.zip');
console.log('Done!');
