import { describe, it, expect } from 'vitest';
import { t, getCategoryLabel, TRANSLATIONS, UI_LANGUAGES, type UiStrings } from '../shared/i18n';

describe('t() translation function', () => {
  it('should return English strings for "en"', () => {
    const s = t('en');
    expect(s.appName).toBe('Sidekick');
    expect(s.enabled).toBe('Enabled');
    expect(s.settings).toBe('Settings');
  });

  it('should return Spanish strings for "es"', () => {
    const s = t('es');
    expect(s.enabled).toBe('Activado');
    expect(s.settings).toBe('Configuración');
  });

  it('should return French strings for "fr"', () => {
    const s = t('fr');
    expect(s.enabled).toBe('Activé');
    expect(s.settings).toBe('Paramètres');
  });

  it('should return German strings for "de"', () => {
    const s = t('de');
    expect(s.enabled).toBe('Aktiviert');
    expect(s.settings).toBe('Einstellungen');
  });

  it('should return Russian strings for "ru"', () => {
    const s = t('ru');
    expect(s.enabled).toBe('Включено');
    expect(s.settings).toBe('Настройки');
  });

  it('should return Japanese strings for "ja"', () => {
    const s = t('ja');
    expect(s.enabled).toBe('有効');
    expect(s.settings).toBe('設定');
  });

  it('should fall back to English for unknown language codes', () => {
    const s = t('xx-unknown');
    expect(s).toEqual(t('en'));
  });

  it('should fall back to English for empty string', () => {
    const s = t('');
    expect(s).toEqual(t('en'));
  });
});

describe('getCategoryLabel', () => {
  it('should return translated category labels', () => {
    expect(getCategoryLabel('en', 'search')).toBe('Search');
    expect(getCategoryLabel('en', 'translate')).toBe('Translate');
    expect(getCategoryLabel('en', 'quickjump')).toBe('Quick Jump');
    expect(getCategoryLabel('en', 'ai')).toBe('AI Search');
    expect(getCategoryLabel('en', 'custom')).toBe('Custom');
  });

  it('should return Spanish category labels', () => {
    expect(getCategoryLabel('es', 'search')).toBe('Búsqueda');
    expect(getCategoryLabel('es', 'ai')).toBe('Búsqueda IA');
  });

  it('should return Russian category labels', () => {
    expect(getCategoryLabel('ru', 'search')).toBe('Поиск');
    expect(getCategoryLabel('ru', 'ai')).toBe('ИИ-поиск');
  });

  it('should fall back gracefully for unknown category', () => {
    expect(getCategoryLabel('en', 'unknown')).toBe('unknown');
  });
});

describe('TRANSLATIONS completeness', () => {
  const enKeys = Object.keys(TRANSLATIONS['en']) as (keyof UiStrings)[];

  for (const [langCode, strings] of Object.entries(TRANSLATIONS)) {
    it(`"${langCode}" should have all keys that English has`, () => {
      for (const key of enKeys) {
        expect(strings[key], `missing key "${key}" in "${langCode}"`).toBeDefined();
        expect(typeof strings[key], `key "${key}" in "${langCode}" should be string`).toBe('string');
        expect(strings[key].length, `key "${key}" in "${langCode}" should not be empty`).toBeGreaterThan(0);
      }
    });
  }
});

describe('UI_LANGUAGES', () => {
  it('should have a matching translation for every UI language', () => {
    for (const lang of UI_LANGUAGES) {
      expect(TRANSLATIONS[lang.code], `missing translation for UI language "${lang.code}"`).toBeDefined();
    }
  });

  it('should have unique language codes', () => {
    const codes = UI_LANGUAGES.map((l) => l.code);
    expect(new Set(codes).size).toBe(codes.length);
  });

  it('should display language names in their native script', () => {
    const en = UI_LANGUAGES.find((l) => l.code === 'en');
    expect(en?.name).toBe('English');

    const ru = UI_LANGUAGES.find((l) => l.code === 'ru');
    expect(ru?.name).toBe('Русский');

    const ja = UI_LANGUAGES.find((l) => l.code === 'ja');
    expect(ja?.name).toBe('日本語');
  });
});
