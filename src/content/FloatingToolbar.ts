import type { MenuItem } from '../shared/types';
import { TOOLBAR_CSS } from './toolbar-styles';

const AFFILIATE_PARAMS = new Set(['tag']);

export class FloatingToolbar {
  private shadow: ShadowRoot;
  private host: HTMLElement;
  private toolbar: HTMLElement;
  private speaking = false;
  private utterance: SpeechSynthesisUtterance | null = null;
  private onScreenshot: (() => void) | null = null;
  private onSpeechEnd: (() => void) | null = null;

  constructor() {
    this.host = document.createElement('sidekick-toolbar');
    this.shadow = this.host.attachShadow({ mode: 'closed' });

    const style = document.createElement('style');
    style.textContent = TOOLBAR_CSS;
    this.shadow.appendChild(style);

    this.toolbar = document.createElement('div');
    this.toolbar.className = 'sk-toolbar';
    this.shadow.appendChild(this.toolbar);

    document.documentElement.appendChild(this.host);
  }

  show(
    items: MenuItem[],
    selectionText: string,
    rect: DOMRect,
    translateLang: string,
    onOpenUrl: (url: string, text: string, itemId: string, itemLabel: string) => void,
    onScreenshot: () => void,
    showTranslateReadButton = true,
    affiliateEnabled = true,
  ) {
    this.onScreenshot = onScreenshot;
    this.toolbar.innerHTML = '';

    // Pinned item buttons
    for (const item of items) {
      const btn = document.createElement('button');
      btn.className = 'sk-btn';
      btn.textContent = item.icon ?? '🔗';
      btn.setAttribute('data-tooltip', item.label);
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const query = item.prompt ? item.prompt.replace('%s', selectionText) : selectionText;
        let url = item.url
          .replace('%s', encodeURIComponent(query))
          .replace('%lang%', encodeURIComponent(translateLang));
        if (!affiliateEnabled) {
          try {
            const parsed = new URL(url);
            for (const key of [...parsed.searchParams.keys()]) {
              if (AFFILIATE_PARAMS.has(key)) parsed.searchParams.delete(key);
            }
            url = parsed.toString();
          } catch { /* ignore */ }
        }
        onOpenUrl(url, selectionText, item.id, item.label);
        this.hide();
      });
      this.toolbar.appendChild(btn);
    }

    // Divider before utility buttons
    if (items.length > 0) {
      const div = document.createElement('div');
      div.className = 'sk-divider';
      this.toolbar.appendChild(div);
    }

    // Read Aloud button
    const speakBtn = document.createElement('button');
    speakBtn.className = 'sk-btn';
    speakBtn.textContent = '🔊';
    speakBtn.setAttribute('data-tooltip', 'Read Aloud');
    speakBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.speaking) {
        this.stopSpeech();
      } else {
        this.onSpeechEnd = () => { speakBtn.textContent = '🔊'; };
        this.speak(selectionText);
        speakBtn.textContent = '🔇';
      }
    });
    this.toolbar.appendChild(speakBtn);

    // Translate Read button
    if (showTranslateReadButton) {
      const translateReadBtn = document.createElement('button');
      translateReadBtn.className = 'sk-btn';
      translateReadBtn.textContent = '🌐';
      translateReadBtn.setAttribute('data-tooltip', 'Read in ' + translateLang);
      translateReadBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.speaking) {
          this.stopSpeech();
        } else {
          this.onSpeechEnd = () => { translateReadBtn.textContent = '🌐'; };
          this.speakWithLang(selectionText, translateLang);
          translateReadBtn.textContent = '🔇';
        }
      });
      this.toolbar.appendChild(translateReadBtn);
    }

    // Screenshot button
    const screenshotBtn = document.createElement('button');
    screenshotBtn.className = 'sk-btn';
    screenshotBtn.textContent = '📸';
    screenshotBtn.setAttribute('data-tooltip', 'Screenshot');
    screenshotBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.hide();
      onScreenshot();
    });
    this.toolbar.appendChild(screenshotBtn);

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'sk-btn sk-btn-close';
    closeBtn.textContent = '\u2715';
    closeBtn.setAttribute('data-tooltip', 'Close');
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.hide();
    });
    this.toolbar.appendChild(closeBtn);

    // Position toolbar
    this.position(rect);
    this.toolbar.classList.add('visible');
  }

  hide() {
    this.toolbar.classList.remove('visible');
    this.stopSpeech();
  }

  isVisible(): boolean {
    return this.toolbar.classList.contains('visible');
  }

  private position(rect: DOMRect) {
    const toolbarHeight = 44;
    const gap = 8;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Estimate toolbar width (items * 36px + some padding)
    const btnCount = this.toolbar.children.length;
    const estimatedWidth = btnCount * 36 + 12;

    let top: number;
    let left: number;

    // Try placing above selection
    if (rect.top > toolbarHeight + gap) {
      top = rect.top - toolbarHeight - gap;
      this.toolbar.classList.add('above');
    } else {
      // Place below selection
      top = rect.bottom + gap;
      this.toolbar.classList.remove('above');
    }

    // Center horizontally on selection
    left = rect.left + rect.width / 2 - estimatedWidth / 2;

    // Clamp to viewport
    if (left < 8) left = 8;
    if (left + estimatedWidth > viewportWidth - 8) left = viewportWidth - estimatedWidth - 8;
    if (top < 4) top = 4;
    if (top + toolbarHeight > viewportHeight - 4) top = viewportHeight - toolbarHeight - 4;

    this.toolbar.style.top = `${top}px`;
    this.toolbar.style.left = `${left}px`;
  }

  private speak(text: string) {
    this.stopSpeech();
    this.utterance = new SpeechSynthesisUtterance(text);
    const lang = document.documentElement.lang;
    if (lang) this.utterance.lang = lang;
    this.utterance.onend = () => { this.speaking = false; this.onSpeechEnd?.(); };
    this.utterance.onerror = () => { this.speaking = false; this.onSpeechEnd?.(); };
    speechSynthesis.speak(this.utterance);
    this.speaking = true;
  }

  private stopSpeech() {
    if (this.speaking) {
      speechSynthesis.cancel();
      this.speaking = false;
      this.utterance = null;
      this.onSpeechEnd?.();
      this.onSpeechEnd = null;
    }
  }

  speakText(text: string) {
    this.speak(text);
  }

  private speakWithLang(text: string, lang: string) {
    this.stopSpeech();
    this.utterance = new SpeechSynthesisUtterance(text);
    this.utterance.lang = lang;
    this.utterance.onend = () => { this.speaking = false; this.onSpeechEnd?.(); };
    this.utterance.onerror = () => { this.speaking = false; this.onSpeechEnd?.(); };
    speechSynthesis.speak(this.utterance);
    this.speaking = true;
  }
}
