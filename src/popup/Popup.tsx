import { useEffect, useState } from 'react';
import browser from 'webextension-polyfill';
import type { Theme } from '../shared/types';
import { getSettings, saveSettings } from '../shared/storage';
import { t } from '../shared/i18n';
import { useTheme } from '../shared/useTheme';
import './popup.css';

export function Popup() {
  const [enabled, setEnabled] = useState(true);
  const [uiLang, setUiLang] = useState('en');
  const [theme, setThemeState] = useState<Theme>('system');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSettings().then((settings) => {
      setEnabled(settings.enabled);
      setUiLang(settings.uiLang);
      setThemeState(settings.theme);
      setLoading(false);
    });
  }, []);

  useTheme(theme);

  const s = t(uiLang);

  const handleToggle = async () => {
    const settings = await getSettings();
    settings.enabled = !settings.enabled;
    await saveSettings(settings);
    setEnabled(settings.enabled);
  };

  const openOptions = () => {
    browser.runtime.openOptionsPage();
  };

  if (loading) return null;

  return (
    <div className="popup">
      <div className="popup-header">
        <h1 className="popup-title">{s.appName}</h1>
        <a
          className="coffee-btn"
          href="https://buymeacoffee.com/antonpas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy me a Coffee
        </a>
      </div>

      <div className="popup-body">
        <div className="toggle-row">
          <span className="toggle-label">
            {enabled ? s.enabled : s.disabled}
          </span>
          <button
            className={`toggle-btn ${enabled ? 'active' : ''}`}
            onClick={handleToggle}
            aria-label={enabled ? s.disabled : s.enabled}
          >
            <span className="toggle-knob" />
          </button>
        </div>

        <p className="popup-hint">
          {s.popupHint}
        </p>

        <button className="settings-btn" onClick={openOptions}>
          {s.settings}
        </button>
      </div>
    </div>
  );
}
