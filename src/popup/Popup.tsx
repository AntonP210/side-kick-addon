import { useEffect, useState } from 'react';
import browser from 'webextension-polyfill';
import type { Theme } from '../shared/types';
import { getSettings, saveSettings, getHistory, isRatePromptDismissed, dismissRatePrompt } from '../shared/storage';
import { t } from '../shared/i18n';
import { useTheme } from '../shared/useTheme';
import './popup.css';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/onfpchpdghdfpdhogboobpbdpjpkpifn';
const FIREFOX_STORE_URL = 'https://addons.mozilla.org/firefox/addon/sidekick-search';
const STORE_URL = browser.runtime.getURL('').startsWith('moz-extension://')
  ? FIREFOX_STORE_URL
  : CHROME_STORE_URL;

export function Popup() {
  const [enabled, setEnabled] = useState(true);
  const [uiLang, setUiLang] = useState('en');
  const [theme, setThemeState] = useState<Theme>('system');
  const [loading, setLoading] = useState(true);
  const [showRatePrompt, setShowRatePrompt] = useState(false);

  useEffect(() => {
    Promise.all([getSettings(), isRatePromptDismissed(), getHistory()]).then(
      ([settings, dismissed, history]) => {
        setEnabled(settings.enabled);
        setUiLang(settings.uiLang);
        setThemeState(settings.theme);
        if (!dismissed && history.length >= 10) {
          setShowRatePrompt(true);
        }
        setLoading(false);
      },
    );
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

      {showRatePrompt && (
        <div className="rate-row">
          <span className="rate-text">{s.enjoyingSidekick}</span>
          <a
            className="rate-btn"
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            title={s.rateSidekick}
          >
            ⭐
          </a>
          <a
            className="rate-btn"
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            title={s.shareSidekick}
          >
            🔗
          </a>
          <button
            className="rate-btn rate-dismiss"
            onClick={() => {
              dismissRatePrompt();
              setShowRatePrompt(false);
            }}
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
