import { useEffect, useState } from 'react';
import type { MenuItem, ExtensionSettings, Theme, HistoryEntry } from '../shared/types';
import { getSettings, saveSettings, getHistory, clearHistory as clearHistoryStorage } from '../shared/storage';
import { isSafeUrlTemplate } from '../shared/url';
import { LANGUAGES, DEFAULT_SETTINGS } from '../shared/defaults';
import { t, getCategoryLabel, UI_LANGUAGES } from '../shared/i18n';
import { useTheme } from '../shared/useTheme';
import './options.css';

export function Options() {
  const [settings, setSettings] = useState<ExtensionSettings | null>(null);
  const [saved, setSaved] = useState(false);
  const [newItem, setNewItem] = useState({ label: '', url: '', icon: '', category: 'custom' as MenuItem['category'] });
  const [newPrompt, setNewPrompt] = useState({ label: '', prompt: '', icon: '', targetAi: 'chatgpt' });
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    getSettings().then(setSettings);
    getHistory().then(setHistory);

    // Refresh history when the options page regains focus
    const onFocus = () => { getHistory().then(setHistory); };
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
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

  const togglePin = (id: string) => {
    if (!settings) return;
    const items = settings.items.map((item) =>
      item.id === id ? { ...item, pinned: !item.pinned } : item,
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
    if (!isSafeUrlTemplate(newItem.url.trim())) {
      alert(s.invalidUrl ?? 'URL must start with https:// or http://');
      return;
    }
    const id = `custom-${Date.now()}`;
    const item: MenuItem = {
      id,
      label: newItem.label.trim(),
      url: newItem.url.trim(),
      category: 'custom',
      enabled: true,
      icon: newItem.icon.trim() || '🔗',
    };
    save({ ...settings, items: [...settings.items, item] });
    setNewItem({ label: '', url: '', icon: '', category: 'custom' });
  };

  const AI_TARGETS = [
    { id: 'chatgpt', label: 'ChatGPT', url: 'https://chatgpt.com/?q=%s' },
    { id: 'claude', label: 'Claude', url: 'https://claude.ai/new?q=%s' },
    { id: 'perplexity', label: 'Perplexity', url: 'https://www.perplexity.ai/search?q=%s' },
  ];

  const addCustomPrompt = () => {
    if (!settings || !newPrompt.label.trim() || !newPrompt.prompt.trim()) return;
    const target = AI_TARGETS.find((t) => t.id === newPrompt.targetAi) ?? AI_TARGETS[0];
    const id = `prompt-${Date.now()}`;
    const item: MenuItem = {
      id,
      label: newPrompt.label.trim(),
      url: target.url,
      category: 'ai',
      enabled: true,
      icon: newPrompt.icon.trim() || '✨',
      prompt: newPrompt.prompt.trim(),
    };
    save({ ...settings, items: [...settings.items, item] });
    setNewPrompt({ label: '', prompt: '', icon: '', targetAi: 'chatgpt' });
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

  const handleClearHistory = async () => {
    if (confirm(s.clearHistoryConfirm)) {
      await clearHistoryStorage();
      setHistory([]);
    }
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
          // Sanitize: keep only items with safe URL templates
          imported.items = imported.items.filter(
            (item) => typeof item.url === 'string' && isSafeUrlTemplate(item.url),
          );
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

      {/* Floating Toolbar */}
      <section className="section">
        <h2>{s.floatingToolbar}</h2>
        <p className="section-desc">{s.floatingToolbarDesc}</p>
        <div className="toggle-row-options">
          <button
            className={`btn-toggle ${settings.floatingToolbar !== false ? 'on' : 'off'}`}
            onClick={() => save({ ...settings, floatingToolbar: settings.floatingToolbar === false })}
          >
            {settings.floatingToolbar !== false ? 'ON' : 'OFF'}
          </button>
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
                      className={`btn-icon btn-pin ${item.pinned ? 'pinned' : ''}`}
                      onClick={() => togglePin(item.id)}
                      title={item.pinned ? s.unpin : s.pin}
                    >
                      📌
                    </button>
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
                    {(item.category === 'custom' || item.prompt) && (
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
          <div className="add-form-row">
            <input
              type="text"
              placeholder={s.iconPlaceholder}
              value={newItem.icon}
              onChange={(e) => setNewItem({ ...newItem, icon: e.target.value })}
              className="input input-icon"
            />
            <input
              type="text"
              placeholder={s.labelPlaceholder}
              value={newItem.label}
              onChange={(e) => setNewItem({ ...newItem, label: e.target.value })}
              className="input"
            />
          </div>
          <input
            type="text"
            placeholder={s.urlPlaceholder}
            value={newItem.url}
            onChange={(e) => setNewItem({ ...newItem, url: e.target.value })}
            className="input"
          />
          <div className="add-form-row">
            <button
              className="btn-primary"
              onClick={addCustomItem}
              disabled={!newItem.label.trim() || !newItem.url.trim()}
            >
              {s.addSite}
            </button>
          </div>
        </div>
      </section>

      {/* Add Custom AI Prompt */}
      <section className="section">
        <h2>{s.addCustomPrompt}</h2>
        <p className="section-desc">
          {s.addCustomPromptDesc.split('%s').map((part, i, arr) =>
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
            value={newPrompt.label}
            onChange={(e) => setNewPrompt({ ...newPrompt, label: e.target.value })}
            className="input"
          />
          <input
            type="text"
            placeholder={s.promptPlaceholder}
            value={newPrompt.prompt}
            onChange={(e) => setNewPrompt({ ...newPrompt, prompt: e.target.value })}
            className="input"
          />
          <div className="add-form-row">
            <input
              type="text"
              placeholder={s.iconPlaceholder}
              value={newPrompt.icon}
              onChange={(e) => setNewPrompt({ ...newPrompt, icon: e.target.value })}
              className="input input-icon"
            />
            <select
              className="prompt-select"
              value={newPrompt.targetAi}
              onChange={(e) => setNewPrompt({ ...newPrompt, targetAi: e.target.value })}
            >
              {AI_TARGETS.map((ai) => (
                <option key={ai.id} value={ai.id}>{ai.label}</option>
              ))}
            </select>
            <button
              className="btn-primary"
              onClick={addCustomPrompt}
              disabled={!newPrompt.label.trim() || !newPrompt.prompt.trim()}
            >
              {s.addPrompt}
            </button>
          </div>
        </div>
      </section>

      {/* Search History */}
      <section className="section">
        <h2>{s.searchHistory}</h2>
        <p className="section-desc">{s.searchHistoryDesc}</p>
        {history.length === 0 ? (
          <p className="no-history">{s.noHistory}</p>
        ) : (
          <>
            <div className="history-list">
              {history.map((entry) => (
                <div key={entry.id} className="history-item">
                  <span className="history-text">{entry.text}</span>
                  <span className="history-meta">
                    {entry.itemLabel} &middot; {new Date(entry.timestamp).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
            <button className="btn-danger history-clear-btn" onClick={handleClearHistory}>
              {s.clearHistory}
            </button>
          </>
        )}
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
