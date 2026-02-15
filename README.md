# Sidekick

Highlight text, right-click, and instantly search, translate, or navigate to your favorite sites. Works on Chrome and Firefox.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
# Both browsers
npm run build

# Chrome only
npm run build:chrome

# Firefox only
npm run build:firefox
```

Build output goes to the `dist/` directory.

## Package for store upload

```bash
npm run package
```

Creates `.zip` files ready to upload to the Chrome Web Store and Firefox Add-ons.

## Load unpacked (for testing)

### Chrome

1. Run `npm run build:chrome`
2. Open `chrome://extensions`
3. Enable "Developer mode" (top right)
4. Click "Load unpacked"
5. Select the `dist/` folder

### Firefox

1. Run `npm run build:firefox`
2. Open `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on"
4. Select any file inside the `dist/` folder (e.g. `manifest.json`)

## Tests

```bash
# Run once
npm test

# Watch mode
npm run test:watch
```
