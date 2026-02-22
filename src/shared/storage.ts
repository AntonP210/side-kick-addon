import browser from 'webextension-polyfill';
import type { ExtensionSettings, HistoryEntry } from './types';
import { DEFAULT_SETTINGS, DEFAULT_ITEMS } from './defaults';

const STORAGE_KEY = 'settings';
const HISTORY_KEY = 'searchHistory';
const MAX_HISTORY = 100;

export async function getSettings(): Promise<ExtensionSettings> {
  const result = await browser.storage.sync.get(STORAGE_KEY);
  if (result[STORAGE_KEY]) {
    const stored = { ...DEFAULT_SETTINGS, ...result[STORAGE_KEY] } as ExtensionSettings;
    // Merge new default items that don't exist in stored settings
    const storedIds = new Set(stored.items.map((i) => i.id));
    const newItems = DEFAULT_ITEMS.filter((i) => !storedIds.has(i.id));
    if (newItems.length > 0) {
      stored.items = [...stored.items, ...newItems];
    }
    return stored;
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

// History functions (using storage.local to avoid sync quota limits)

export async function getHistory(): Promise<HistoryEntry[]> {
  const result = await browser.storage.local.get(HISTORY_KEY);
  return (result[HISTORY_KEY] as HistoryEntry[]) ?? [];
}

export async function addHistoryEntry(entry: Omit<HistoryEntry, 'id' | 'timestamp'>): Promise<void> {
  const history = await getHistory();
  const newEntry: HistoryEntry = {
    ...entry,
    id: `h-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    timestamp: Date.now(),
  };
  history.unshift(newEntry);
  if (history.length > MAX_HISTORY) {
    history.length = MAX_HISTORY;
  }
  await browser.storage.local.set({ [HISTORY_KEY]: history });
}

export async function clearHistory(): Promise<void> {
  await browser.storage.local.remove(HISTORY_KEY);
}

// Rate prompt

const RATE_DISMISSED_KEY = 'ratePromptDismissed';

export async function isRatePromptDismissed(): Promise<boolean> {
  const result = await browser.storage.local.get(RATE_DISMISSED_KEY);
  return result[RATE_DISMISSED_KEY] === true;
}

export async function dismissRatePrompt(): Promise<void> {
  await browser.storage.local.set({ [RATE_DISMISSED_KEY]: true });
}
