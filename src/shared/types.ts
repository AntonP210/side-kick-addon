export interface MenuItem {
  id: string;
  label: string;
  url: string;
  category: 'search' | 'translate' | 'quickjump' | 'ai' | 'custom';
  enabled: boolean;
  icon?: string;
  pinned?: boolean;
  prompt?: string;
}

export interface HistoryEntry {
  id: string;
  text: string;
  itemId: string;
  itemLabel: string;
  timestamp: number;
}

export type Theme = 'light' | 'dark' | 'system';

export interface ExtensionSettings {
  enabled: boolean;
  items: MenuItem[];
  translateLang: string;
  uiLang: string;
  theme: Theme;
  floatingToolbar?: boolean;
}
