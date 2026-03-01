import { describe, it, expect } from 'vitest';
import { DEFAULT_ITEMS, DEFAULT_SETTINGS, CATEGORY_LABELS, LANGUAGES } from '../shared/defaults';
import type { MenuItem } from '../shared/types';

describe('DEFAULT_ITEMS', () => {
  it('should have unique IDs', () => {
    const ids = DEFAULT_ITEMS.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('should have non-empty labels for all items', () => {
    for (const item of DEFAULT_ITEMS) {
      expect(item.label.trim().length).toBeGreaterThan(0);
    }
  });

  it('should have URLs containing %s placeholder', () => {
    for (const item of DEFAULT_ITEMS) {
      expect(item.url).toContain('%s');
    }
  });

  it('should have valid categories', () => {
    const validCategories: MenuItem['category'][] = ['search', 'translate', 'quickjump', 'ai', 'custom'];
    for (const item of DEFAULT_ITEMS) {
      expect(validCategories).toContain(item.category);
    }
  });

  it('should include expected search engines', () => {
    const ids = DEFAULT_ITEMS.map((item) => item.id);
    expect(ids).toContain('google');
    expect(ids).toContain('bing');
    expect(ids).toContain('duckduckgo');
  });

  it('should include translate option', () => {
    const translate = DEFAULT_ITEMS.find((item) => item.id === 'google-translate');
    expect(translate).toBeDefined();
    expect(translate!.category).toBe('translate');
    expect(translate!.url).toContain('%lang%');
  });

  it('should include AI search options', () => {
    const aiItems = DEFAULT_ITEMS.filter((item) => item.category === 'ai');
    const aiIds = aiItems.map((item) => item.id);
    expect(aiIds).toContain('chatgpt');
    expect(aiIds).toContain('perplexity');
    expect(aiIds).toContain('claude');
  });

  it('should include quick jump sites', () => {
    const quickjumpIds = DEFAULT_ITEMS
      .filter((item) => item.category === 'quickjump')
      .map((item) => item.id);
    expect(quickjumpIds).toContain('wikipedia');
    expect(quickjumpIds).toContain('youtube');
    expect(quickjumpIds).toContain('google-maps');
    expect(quickjumpIds).toContain('amazon');
    expect(quickjumpIds).toContain('reddit');
    expect(quickjumpIds).toContain('github');
    expect(quickjumpIds).toContain('ebay');
    expect(quickjumpIds).toContain('aliexpress');
    expect(quickjumpIds).toContain('iherb');
  });

  it('should have affiliate tags in Amazon URL', () => {
    const amazon = DEFAULT_ITEMS.find((i) => i.id === 'amazon');
    expect(amazon!.url).toContain('tag=');
  });

  it('should not include Stack Overflow', () => {
    const ids = DEFAULT_ITEMS.map((item) => item.id);
    expect(ids).not.toContain('stackoverflow');
  });

  it('should have search engines disabled by default', () => {
    const searchItems = DEFAULT_ITEMS.filter((item) => item.category === 'search');
    for (const item of searchItems) {
      expect(item.enabled).toBe(false);
    }
  });

  it('should have GitHub, eBay, AliExpress, iHerb disabled by default', () => {
    const disabledIds = ['github', 'ebay', 'aliexpress', 'iherb'];
    for (const id of disabledIds) {
      const item = DEFAULT_ITEMS.find((i) => i.id === id);
      expect(item).toBeDefined();
      expect(item!.enabled).toBe(false);
    }
  });

  it('should have translate, quick jump core sites, and AI enabled by default', () => {
    const enabledIds = [
      'google-translate',
      'wikipedia',
      'youtube',
      'google-maps',
      'amazon',
      'reddit',
      'chatgpt',
      'perplexity',
      'claude',
    ];
    for (const id of enabledIds) {
      const item = DEFAULT_ITEMS.find((i) => i.id === id);
      expect(item).toBeDefined();
      expect(item!.enabled).toBe(true);
    }
  });
});

describe('DEFAULT_SETTINGS', () => {
  it('should be enabled by default', () => {
    expect(DEFAULT_SETTINGS.enabled).toBe(true);
  });

  it('should default to English translation', () => {
    expect(DEFAULT_SETTINGS.translateLang).toBe('en');
  });

  it('should default to English UI language', () => {
    expect(DEFAULT_SETTINGS.uiLang).toBe('en');
  });

  it('should default to system theme', () => {
    expect(DEFAULT_SETTINGS.theme).toBe('system');
  });

  it('should contain all default items', () => {
    expect(DEFAULT_SETTINGS.items).toBe(DEFAULT_ITEMS);
  });

  it('should default showTranslateReadButton to true', () => {
    expect(DEFAULT_SETTINGS.showTranslateReadButton).toBe(true);
  });

  it('should default affiliateEnabled to true', () => {
    expect(DEFAULT_SETTINGS.affiliateEnabled).toBe(true);
  });

  it('should default floatingToolbar to true', () => {
    expect(DEFAULT_SETTINGS.floatingToolbar).toBe(true);
  });
});

describe('CATEGORY_LABELS', () => {
  it('should have labels for all categories', () => {
    expect(CATEGORY_LABELS.search).toBe('Search');
    expect(CATEGORY_LABELS.translate).toBe('Translate');
    expect(CATEGORY_LABELS.quickjump).toBe('Quick Jump');
    expect(CATEGORY_LABELS.ai).toBe('AI Search');
    expect(CATEGORY_LABELS.custom).toBe('Custom');
  });
});

describe('LANGUAGES', () => {
  it('should have English as first language', () => {
    expect(LANGUAGES[0]).toEqual({ code: 'en', name: 'English' });
  });

  it('should have unique language codes', () => {
    const codes = LANGUAGES.map((l) => l.code);
    expect(new Set(codes).size).toBe(codes.length);
  });

  it('should have non-empty names and codes', () => {
    for (const lang of LANGUAGES) {
      expect(lang.code.length).toBeGreaterThan(0);
      expect(lang.name.length).toBeGreaterThan(0);
    }
  });
});
