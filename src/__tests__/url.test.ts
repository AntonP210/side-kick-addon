import { describe, it, expect } from 'vitest';
import { buildUrl } from '../shared/url';
import { DEFAULT_ITEMS } from '../shared/defaults';

describe('buildUrl', () => {
  it('should replace %s with encoded search text', () => {
    const result = buildUrl('https://www.google.com/search?q=%s', 'hello world', 'en');
    expect(result).toBe('https://www.google.com/search?q=hello%20world');
  });

  it('should encode special characters in search text', () => {
    const result = buildUrl('https://www.google.com/search?q=%s', 'c++ & java', 'en');
    expect(result).toBe('https://www.google.com/search?q=c%2B%2B%20%26%20java');
  });

  it('should replace %lang% with the translate language', () => {
    const result = buildUrl(
      'https://translate.google.com/?sl=auto&tl=%lang%&text=%s',
      'hello',
      'fr',
    );
    expect(result).toBe('https://translate.google.com/?sl=auto&tl=fr&text=hello');
  });

  it('should handle both %s and %lang% in the same URL', () => {
    const result = buildUrl(
      'https://translate.google.com/?sl=auto&tl=%lang%&text=%s',
      'good morning',
      'ja',
    );
    expect(result).toBe(
      'https://translate.google.com/?sl=auto&tl=ja&text=good%20morning',
    );
  });

  it('should handle URLs without %lang% placeholder', () => {
    const result = buildUrl('https://en.wikipedia.org/wiki/Special:Search?search=%s', 'TypeScript', 'en');
    expect(result).toBe('https://en.wikipedia.org/wiki/Special:Search?search=TypeScript');
  });

  it('should handle unicode text', () => {
    const result = buildUrl('https://www.google.com/search?q=%s', 'こんにちは', 'en');
    expect(result).toContain('https://www.google.com/search?q=');
    expect(decodeURIComponent(result)).toContain('こんにちは');
  });

  it('should handle empty search text', () => {
    const result = buildUrl('https://www.google.com/search?q=%s', '', 'en');
    expect(result).toBe('https://www.google.com/search?q=');
  });

  // Test all default items produce valid URLs
  describe('all default items', () => {
    for (const item of DEFAULT_ITEMS) {
      it(`should produce a valid URL for ${item.label}`, () => {
        const result = buildUrl(item.url, 'test query', 'en');
        expect(result).toContain('test%20query');
        expect(result.startsWith('https://')).toBe(true);
        expect(result).not.toContain('%s');
      });
    }
  });
});

describe('buildUrl affiliate stripping', () => {
  it('should keep affiliate params when affiliateEnabled is true', () => {
    const result = buildUrl('https://www.amazon.com/s?k=%s&tag=sidekick0e-20', 'test', 'en', undefined, true);
    expect(result).toContain('tag=sidekick0e-20');
  });

  it('should keep affiliate params by default (no arg)', () => {
    const result = buildUrl('https://www.amazon.com/s?k=%s&tag=sidekick0e-20', 'test', 'en');
    expect(result).toContain('tag=sidekick0e-20');
  });

  it('should strip Amazon affiliate tag when affiliateEnabled is false', () => {
    const result = buildUrl('https://www.amazon.com/s?k=%s&tag=sidekick0e-20', 'test', 'en', undefined, false);
    expect(result).not.toContain('tag=');
    expect(result).toContain('k=test');
  });

  it('should not strip non-affiliate params when affiliateEnabled is false', () => {
    const result = buildUrl('https://www.google.com/search?q=%s&hl=en', 'test', 'en', undefined, false);
    expect(result).toContain('q=test');
    expect(result).toContain('hl=en');
  });
});
