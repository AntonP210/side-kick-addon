import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: false,
    alias: {
      'webextension-polyfill': path.resolve(__dirname, 'src/__mocks__/webextension-polyfill.ts'),
    },
  },
});
