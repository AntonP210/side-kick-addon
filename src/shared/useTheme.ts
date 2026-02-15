import { useEffect } from 'react';
import type { Theme } from './types';

export function useTheme(theme: Theme): void {
  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (resolved: 'light' | 'dark') => {
      root.setAttribute('data-theme', resolved);
    };

    if (theme === 'light' || theme === 'dark') {
      applyTheme(theme);
      return;
    }

    // System: match OS preference
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    applyTheme(mq.matches ? 'dark' : 'light');

    const handler = (e: MediaQueryListEvent) => {
      applyTheme(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);
}
