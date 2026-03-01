import browser from 'webextension-polyfill';
import type { MenuItem } from '../shared/types';
import { FloatingToolbar } from './FloatingToolbar';
import { ScreenshotTool } from './ScreenshotTool';

let toolbar: FloatingToolbar | null = null;
const screenshotTool = new ScreenshotTool();

let debounceTimer: ReturnType<typeof setTimeout> | null = null;

function getToolbar(): FloatingToolbar {
  if (!toolbar) toolbar = new FloatingToolbar();
  return toolbar;
}

function onOpenUrl(url: string, text: string, itemId: string, itemLabel: string) {
  browser.runtime.sendMessage({
    type: 'OPEN_URL',
    url,
    text,
    itemId,
    itemLabel,
  });
}

async function showToolbar() {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || !selection.toString().trim()) {
    return;
  }

  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();
  const text = selection.toString().trim();

  try {
    const response = await browser.runtime.sendMessage({ type: 'GET_PINNED_ITEMS' }) as Record<string, unknown>;

    // Check if extension and floating toolbar are enabled
    if (response.enabled === false || response.floatingToolbar === false) {
      return;
    }

    const items = (response.items ?? []) as MenuItem[];
    const translateLang = (response.translateLang ?? 'en') as string;

    // Re-check selection is still there after async call
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.toString().trim()) return;

    const showTranslateRead = (response.showTranslateReadButton ?? true) as boolean;
    const affiliateEnabled = (response.affiliateEnabled ?? true) as boolean;
    getToolbar().show(items, text, rect, translateLang, onOpenUrl, () => screenshotTool.start(), showTranslateRead, affiliateEnabled);
  } catch {
    // Extension context may be invalidated
  }
}

// Check if the selection is inside an editable element
function isSelectionInEditable(): boolean {
  const selection = window.getSelection();
  if (!selection || !selection.anchorNode) return false;
  const node = selection.anchorNode;
  const el = node.nodeType === Node.ELEMENT_NODE ? node as Element : node.parentElement;
  if (!el) return false;
  if (el.closest('input, textarea')) return true;
  if (el.closest('[contenteditable="true"]') || (el instanceof HTMLElement && el.isContentEditable)) return true;
  return false;
}

// Show toolbar on text selection
document.addEventListener('mouseup', (e) => {
  // Ignore clicks inside the toolbar host element
  if ((e.target as Element)?.closest?.('sidekick-toolbar')) return;

  // Don't show toolbar when selecting in editable fields
  if (isSelectionInEditable()) return;

  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => showToolbar(), 150);
});

// Hide toolbar when clicking outside
document.addEventListener('mousedown', (e) => {
  if ((e.target as Element)?.closest?.('sidekick-toolbar')) return;
  if (toolbar?.isVisible()) {
    toolbar.hide();
  }
});

// Hide on scroll
document.addEventListener('scroll', () => {
  if (toolbar?.isVisible()) toolbar.hide();
}, { passive: true });

// Hide on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && toolbar?.isVisible()) {
    toolbar.hide();
  }
});

// Listen for messages from service worker
// eslint-disable-next-line @typescript-eslint/no-explicit-any
browser.runtime.onMessage.addListener(((message: any) => {
  const msg = message as Record<string, unknown>;
  if (msg.type === 'READ_ALOUD') {
    getToolbar().speakText(msg.text as string);
  }
  if (msg.type === 'START_SCREENSHOT') {
    screenshotTool.start();
  }
}) as Parameters<typeof browser.runtime.onMessage.addListener>[0]);
