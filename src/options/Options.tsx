import { useEffect, useState } from 'react';
import type { MenuItem, ExtensionSettings, Theme } from '../shared/types';
import { getSettings, saveSettings } from '../shared/storage';
import { LANGUAGES, DEFAULT_SETTINGS } from '../shared/defaults';
import { t, getCategoryLabel, UI_LANGUAGES } from '../shared/i18n';
import { useTheme } from '../shared/useTheme';
import './options.css';

export function Options() {
  const [settings, setSettings] = useState<ExtensionSettings | null>(null);
  const [saved, setSaved] = useState(false);
  const [newItem, setNewItem] = useState({ label: '', url: '', category: 'custom' as MenuItem['category'] });

  useEffect(() => {
    getSettings().then(setSettings);
  }, []);

  useTheme(settings?.theme ?? 'system');

  const s = t(settings?.uiLang ?? 'en');

  const save = async (updated: ExtensionSettings) => {
    setSettings(updated);
    await saveSettings(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const toggleItem = (id: string) => {
    if (!settings) return;
    const items = settings.items.map((item) =>
      item.id === id ? { ...item, enabled: !item.enabled } : item,
    );
    save({ ...settings, items });
  };

  const removeItem = (id: string) => {
    if (!settings) return;
    const items = settings.items.filter((item) => item.id !== id);
    save({ ...settings, items });
  };

  const moveItem = (id: string, direction: -1 | 1) => {
    if (!settings) return;
    const items = [...settings.items];
    const index = items.findIndex((item) => item.id === id);
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= items.length) return;
    [items[index], items[newIndex]] = [items[newIndex], items[index]];
    save({ ...settings, items });
  };

  const addCustomItem = () => {
    if (!settings || !newItem.label.trim() || !newItem.url.trim()) return;
    const id = `custom-${Date.now()}`;
    const item: MenuItem = {
      id,
      label: newItem.label.trim(),
      url: newItem.url.trim(),
      category: 'custom',
      enabled: true,
      icon: '🔗',
    };
    save({ ...settings, items: [...settings.items, item] });
    setNewItem({ label: '', url: '', category: 'custom' });
  };

  const setTranslateLang = (lang: string) => {
    if (!settings) return;
    save({ ...settings, translateLang: lang });
  };

  const setUiLang = (lang: string) => {
    if (!settings) return;
    save({ ...settings, uiLang: lang });
  };

  const setTheme = (theme: Theme) => {
    if (!settings) return;
    save({ ...settings, theme });
  };

  const exportSettings = () => {
    if (!settings) return;
    const blob = new Blob([JSON.stringify(settings, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sidekick-settings.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importSettings = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const imported = JSON.parse(text) as ExtensionSettings;
        if (imported.items && Array.isArray(imported.items)) {
          save(imported);
        }
      } catch {
        alert(s.invalidFile);
      }
    };
    input.click();
  };

  const resetDefaults = () => {
    if (confirm(s.resetConfirm)) {
      save({ ...DEFAULT_SETTINGS });
    }
  };

  if (!settings) return <div className="options loading">Loading...</div>;

  const groupedItems = new Map<MenuItem['category'], MenuItem[]>();
  for (const item of settings.items) {
    const list = groupedItems.get(item.category) ?? [];
    list.push(item);
    groupedItems.set(item.category, list);
  }

  return (
    <div className="options">
      <header className="options-header">
        <div className="header-top">
          <h1>{s.appName}</h1>
          <a
            className="coffee-btn"
            href="https://buymeacoffee.com/antonpas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy me a Coffee
          </a>
        </div>
        <p className="subtitle">{s.optionsSubtitle}</p>
        {saved && <span className="save-indicator">{s.saved}</span>}
      </header>

      {/* Language settings */}
      <section className="section">
        <div className="lang-row">
          <div className="lang-col">
            <h2>{s.translationLanguage}</h2>
            <p className="section-desc">{s.translationLanguageDesc}</p>
            <select
              className="lang-select"
              value={settings.translateLang}
              onChange={(e) => setTranslateLang(e.target.value)}
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div className="lang-col">
            <h2>{s.uiLanguage}</h2>
            <p className="section-desc">{s.uiLanguageDesc}</p>
            <select
              className="lang-select"
              value={settings.uiLang}
              onChange={(e) => setUiLang(e.target.value)}
            >
              {UI_LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Theme */}
      <section className="section">
        <h2>{s.theme}</h2>
        <p className="section-desc">{s.themeDesc}</p>
        <div className="theme-selector">
          {(['light', 'dark', 'system'] as Theme[]).map((value) => (
            <button
              key={value}
              className={`theme-btn ${settings.theme === value ? 'active' : ''}`}
              onClick={() => setTheme(value)}
            >
              {value === 'light' ? s.themeLight : value === 'dark' ? s.themeDark : s.themeSystem}
            </button>
          ))}
        </div>
      </section>

      {/* Menu items */}
      <section className="section">
        <h2>{s.menuItems}</h2>
        <p className="section-desc">{s.menuItemsDesc}</p>

        {(['search', 'translate', 'quickjump', 'ai', 'custom'] as MenuItem['category'][]).map((category) => {
          const items = groupedItems.get(category);
          if (!items || items.length === 0) return null;
          return (
            <div key={category} className="category-group">
              <h3 className="category-title">{getCategoryLabel(settings.uiLang, category)}</h3>
              {items.map((item) => (
                <div key={item.id} className={`menu-item ${item.enabled ? '' : 'disabled'}`}>
                  <div className="item-left">
                    <span className="item-icon">{item.icon}</span>
                    <span className="item-label">{item.label}</span>
                    <span className="item-url">{item.url}</span>
                  </div>
                  <div className="item-actions">
                    <button
                      className="btn-icon"
                      onClick={() => moveItem(item.id, -1)}
                      title="Move up"
                    >
                      ↑
                    </button>
                    <button
                      className="btn-icon"
                      onClick={() => moveItem(item.id, 1)}
                      title="Move down"
                    >
                      ↓
                    </button>
                    <button
                      className={`btn-toggle ${item.enabled ? 'on' : 'off'}`}
                      onClick={() => toggleItem(item.id)}
                    >
                      {item.enabled ? 'ON' : 'OFF'}
                    </button>
                    {item.category === 'custom' && (
                      <button
                        className="btn-icon btn-delete"
                        onClick={() => removeItem(item.id)}
                        title="Remove"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </section>

      {/* Add custom site */}
      <section className="section">
        <h2>{s.addCustomSite}</h2>
        <p className="section-desc">
          {s.addCustomSiteDesc.split('%s').map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>{part}<code>%s</code></span>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}
        </p>
        <div className="add-form">
          <input
            type="text"
            placeholder={s.labelPlaceholder}
            value={newItem.label}
            onChange={(e) => setNewItem({ ...newItem, label: e.target.value })}
            className="input"
          />
          <input
            type="text"
            placeholder={s.urlPlaceholder}
            value={newItem.url}
            onChange={(e) => setNewItem({ ...newItem, url: e.target.value })}
            className="input"
          />
          <button
            className="btn-primary"
            onClick={addCustomItem}
            disabled={!newItem.label.trim() || !newItem.url.trim()}
          >
            {s.addSite}
          </button>
        </div>
      </section>

      {/* Import / Export */}
      <section className="section">
        <h2>{s.backupRestore}</h2>
        <div className="button-row">
          <button className="btn-secondary" onClick={exportSettings}>
            {s.exportSettings}
          </button>
          <button className="btn-secondary" onClick={importSettings}>
            {s.importSettings}
          </button>
          <button className="btn-danger" onClick={resetDefaults}>
            {s.resetToDefaults}
          </button>
        </div>
      </section>
    </div>
  );
}
