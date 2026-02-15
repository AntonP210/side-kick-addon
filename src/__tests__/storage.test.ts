import { describe, it, expect, beforeEach, vi } from 'vitest';
import browser from 'webextension-polyfill';
import { getSettings, saveSettings, onSettingsChanged } from '../shared/storage';
import { DEFAULT_SETTINGS } from '../shared/defaults';
import type { ExtensionSettings } from '../shared/types';

beforeEach(() => {
  (browser as any)._reset();
});

describe('getSettings', () => {
  it('should return default settings when storage is empty', async () => {
    const settings = await getSettings();
    expect(settings).toEqual(DEFAULT_SETTINGS);
  });

  it('should return stored settings merged with defaults', async () => {
    const custom: ExtensionSettings = {
      ...DEFAULT_SETTINGS,
      enabled: false,
      translateLang: 'fr',
    };
    await browser.storage.sync.set({ settings: custom });

    const settings = await getSettings();
    expect(settings.enabled).toBe(false);
    expect(settings.translateLang).toBe('fr');
  });

  it('should fill missing fields from defaults', async () => {
    // Simulate a partial stored object (e.g. older version)
    await browser.storage.sync.set({ settings: { enabled: false } });

    const settings = await getSettings();
    expect(settings.enabled).toBe(false);
    // items and translateLang should come from defaults
    expect(settings.items).toBeDefined();
    expect(settings.translateLang).toBe('en');
  });
});

describe('saveSettings', () => {
  it('should persist settings to storage', async () => {
    const custom: ExtensionSettings = {
      ...DEFAULT_SETTINGS,
      translateLang: 'ja',
    };
    await saveSettings(custom);

    expect(browser.storage.sync.set).toHaveBeenCalledWith({
      settings: custom,
    });
  });

  it('should be retrievable after saving', async () => {
    const custom: ExtensionSettings = {
      ...DEFAULT_SETTINGS,
      enabled: false,
      translateLang: 'de',
    };
    await saveSettings(custom);
    const retrieved = await getSettings();

    expect(retrieved.enabled).toBe(false);
    expect(retrieved.translateLang).toBe('de');
  });
});

describe('onSettingsChanged', () => {
  it('should register a change listener', () => {
    const callback = vi.fn();
    onSettingsChanged(callback);

    expect(browser.storage.onChanged.addListener).toHaveBeenCalled();
  });

  it('should call callback when settings change', async () => {
    const callback = vi.fn();
    onSettingsChanged(callback);

    const newSettings: ExtensionSettings = {
      ...DEFAULT_SETTINGS,
      translateLang: 'es',
    };
    await saveSettings(newSettings);

    expect(callback).toHaveBeenCalledWith(newSettings);
  });

  it('should return an unsubscribe function', () => {
    const callback = vi.fn();
    const unsubscribe = onSettingsChanged(callback);

    unsubscribe();

    expect(browser.storage.onChanged.removeListener).toHaveBeenCalled();
  });
});
