import browser from 'webextension-polyfill';
import type { MenuItem, ExtensionSettings } from '../shared/types';
import { getSettings, onSettingsChanged } from '../shared/storage';
import { buildUrl } from '../shared/url';

const PARENT_MENU_ID = 'smart-search';

async function buildContextMenus(): Promise<void> {
  await browser.contextMenus.removeAll();

  const settings = await getSettings();
  if (!settings.enabled) return;

  const enabledItems = settings.items.filter((item) => item.enabled);
  if (enabledItems.length === 0) return;

  // Create parent menu
  browser.contextMenus.create({
    id: PARENT_MENU_ID,
    title: 'Sidekick search...',
    contexts: ['selection'],
  });

  // Group items by category in display order
  const categoryOrder: MenuItem['category'][] = [
    'search',
    'translate',
    'quickjump',
    'ai',
    'custom',
  ];

  let needsSeparator = false;

  for (const category of categoryOrder) {
    const categoryItems = enabledItems.filter((item) => item.category === category);
    if (categoryItems.length === 0) continue;

    // Add separator between categories
    if (needsSeparator) {
      browser.contextMenus.create({
        id: `separator-${category}`,
        type: 'separator',
        parentId: PARENT_MENU_ID,
        contexts: ['selection'],
      });
    }

    for (const item of categoryItems) {
      browser.contextMenus.create({
        id: item.id,
        title: `${item.icon ?? ''} ${item.label}`.trim(),
        parentId: PARENT_MENU_ID,
        contexts: ['selection'],
      });
    }

    needsSeparator = true;
  }
}

// Handle context menu clicks
browser.contextMenus.onClicked.addListener(async (info) => {
  if (!info.selectionText) return;

  const settings = await getSettings();
  const item = settings.items.find((i) => i.id === info.menuItemId);
  if (!item) return;

  const url = buildUrl(item.url, info.selectionText, settings.translateLang);
  await browser.tabs.create({ url });
});

// Rebuild menus when settings change
onSettingsChanged(() => {
  buildContextMenus();
});

// Build menus on install and startup
browser.runtime.onInstalled.addListener(() => {
  buildContextMenus();
});

browser.runtime.onStartup.addListener(() => {
  buildContextMenus();
});
