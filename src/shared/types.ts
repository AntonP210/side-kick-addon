export interface MenuItem {
  id: string;
  label: string;
  url: string;
  category: 'search' | 'translate' | 'quickjump' | 'ai' | 'custom';
  enabled: boolean;
  icon?: string;
}

export type Theme = 'light' | 'dark' | 'system';

export interface ExtensionSettings {
  enabled: boolean;
  items: MenuItem[];
  translateLang: string;
  uiLang: string;
  theme: Theme;
}
