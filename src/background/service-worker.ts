import browser from 'webextension-polyfill';
import type { MenuItem } from '../shared/types';
import { getSettings, onSettingsChanged, addHistoryEntry } from '../shared/storage';
import { buildUrl } from '../shared/url';

const PARENT_MENU_ID = 'smart-search';
const READ_ALOUD_MENU_ID = 'read-aloud';
const SCREENSHOT_MENU_ID = 'screenshot';

async function buildContextMenus(): Promise<void> {
  await browser.contextMenus.removeAll();

  const settings = await getSettings();
  if (!settings.enabled) return;

  const enabledItems = settings.items.filter((item) => item.enabled);
  if (enabledItems.length === 0) return;

  // Create parent menu
  browser.contextMenus.create({
    id: PARENT_MENU_ID,
    title: 'Sidekick',
    contexts: ['selection', 'page'],
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

  // Separator before utility items
  browser.contextMenus.create({
    id: 'separator-utilities',
    type: 'separator',
    parentId: PARENT_MENU_ID,
    contexts: ['selection', 'page'],
  });

  // Read Aloud context menu item
  browser.contextMenus.create({
    id: READ_ALOUD_MENU_ID,
    title: '🔊 Read Aloud',
    parentId: PARENT_MENU_ID,
    contexts: ['selection'],
  });

  // Screenshot context menu item
  browser.contextMenus.create({
    id: SCREENSHOT_MENU_ID,
    title: '📸 Screenshot',
    parentId: PARENT_MENU_ID,
    contexts: ['page', 'selection'],
  });
}

// Handle context menu clicks
browser.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === READ_ALOUD_MENU_ID) {
    if (!info.selectionText || !tab?.id) return;
    await browser.tabs.sendMessage(tab.id, {
      type: 'READ_ALOUD',
      text: info.selectionText,
    });
    return;
  }

  if (info.menuItemId === SCREENSHOT_MENU_ID) {
    if (!tab?.id) return;
    await browser.tabs.sendMessage(tab.id, { type: 'START_SCREENSHOT' });
    return;
  }

  if (!info.selectionText) return;

  const settings = await getSettings();
  const item = settings.items.find((i) => i.id === info.menuItemId);
  if (!item) return;

  const url = buildUrl(item.url, info.selectionText, settings.translateLang, item.prompt);
  await browser.tabs.create({ url });

  // Record in history
  await addHistoryEntry({
    text: info.selectionText,
    itemId: item.id,
    itemLabel: item.label,
  });
});

// Handle messages from content script
// eslint-disable-next-line @typescript-eslint/no-explicit-any
browser.runtime.onMessage.addListener(((message: any) => {
  const msg = message as Record<string, unknown>;
  if (msg.type === 'GET_PINNED_ITEMS') {
    return getSettings().then((settings) => {
      const pinned = settings.items.filter((i) => i.enabled && i.pinned);
      return {
        items: pinned,
        translateLang: settings.translateLang,
        enabled: settings.enabled,
        floatingToolbar: settings.floatingToolbar !== false,
      };
    });
  }

  if (msg.type === 'OPEN_URL') {
    const url = msg.url as string;
    const text = msg.text as string | undefined;
    const itemId = msg.itemId as string | undefined;
    const itemLabel = msg.itemLabel as string | undefined;
    return browser.tabs.create({ url }).then(async () => {
      if (text && itemId && itemLabel) {
        await addHistoryEntry({ text, itemId, itemLabel });
      }
    });
  }

  if (msg.type === 'CAPTURE_TAB') {
    return browser.tabs.captureVisibleTab(
      undefined as unknown as number,
      { format: 'png' },
    ).then((dataUrl) => ({ dataUrl }));
  }
}) as Parameters<typeof browser.runtime.onMessage.addListener>[0]);

// Debounce menu rebuilds to avoid duplicate ID errors from concurrent calls
let menuBuildTimer: ReturnType<typeof setTimeout> | undefined;
function scheduleBuildMenus() {
  clearTimeout(menuBuildTimer);
  menuBuildTimer = setTimeout(() => buildContextMenus(), 50);
}

// Rebuild menus when settings change
onSettingsChanged(() => {
  scheduleBuildMenus();
});

// Build menus on install and startup
browser.runtime.onInstalled.addListener(() => {
  scheduleBuildMenus();
});

browser.runtime.onStartup.addListener(() => {
  scheduleBuildMenus();
});
