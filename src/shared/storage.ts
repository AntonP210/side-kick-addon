import browser from 'webextension-polyfill';
import type { ExtensionSettings } from './types';
import { DEFAULT_SETTINGS } from './defaults';

const STORAGE_KEY = 'settings';

export async function getSettings(): Promise<ExtensionSettings> {
  const result = await browser.storage.sync.get(STORAGE_KEY);
  if (result[STORAGE_KEY]) {
    return { ...DEFAULT_SETTINGS, ...result[STORAGE_KEY] };
  }
  return { ...DEFAULT_SETTINGS };
}

export async function saveSettings(settings: ExtensionSettings): Promise<void> {
  await browser.storage.sync.set({ [STORAGE_KEY]: settings });
}

export function onSettingsChanged(
  callback: (settings: ExtensionSettings) => void,
): () => void {
  const listener = (
    changes: Record<string, browser.Storage.StorageChange>,
  ) => {
    if (changes[STORAGE_KEY]?.newValue) {
      callback(changes[STORAGE_KEY].newValue as ExtensionSettings);
    }
  };
  browser.storage.onChanged.addListener(listener);
  return () => browser.storage.onChanged.removeListener(listener);
}
