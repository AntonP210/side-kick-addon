export interface UiStrings {
  // Popup
  appName: string;
  enabled: string;
  disabled: string;
  popupHint: string;
  settings: string;

  // Options
  optionsSubtitle: string;
  saved: string;

  translationLanguage: string;
  translationLanguageDesc: string;
  uiLanguage: string;
  uiLanguageDesc: string;

  menuItems: string;
  menuItemsDesc: string;

  addCustomSite: string;
  addCustomSiteDesc: string;
  labelPlaceholder: string;
  urlPlaceholder: string;
  iconPlaceholder: string;
  addSite: string;

  backupRestore: string;
  exportSettings: string;
  importSettings: string;
  resetToDefaults: string;
  resetConfirm: string;
  invalidFile: string;
  invalidUrl: string;

  // Theme
  theme: string;
  themeDesc: string;
  themeLight: string;
  themeDark: string;
  themeSystem: string;

  // Categories
  catSearch: string;
  catTranslate: string;
  catQuickJump: string;
  catAiSearch: string;
  catCustom: string;

  // Pinned
  pinned: string;
  pin: string;
  unpin: string;

  // History
  searchHistory: string;
  searchHistoryDesc: string;
  clearHistory: string;
  clearHistoryConfirm: string;
  noHistory: string;

  // Floating Toolbar
  floatingToolbar: string;
  floatingToolbarDesc: string;

  // Read Aloud
  readAloud: string;

  // Screenshot
  screenshot: string;

  // Custom AI Prompt
  addCustomPrompt: string;
  addCustomPromptDesc: string;
  promptPlaceholder: string;
  targetAi: string;
  addPrompt: string;

  // Translate Read
  translateRead: string;
  translateReadDesc: string;

  // Affiliate
  affiliateLinks: string;
  affiliateLinksDesc: string;
  affiliateBanner: string;

  // Rate & Share
  enjoyingSidekick: string;
  rateSidekick: string;
  shareSidekick: string;
}

const en: UiStrings = {
  appName: 'Sidekick',
  enabled: 'Enabled',
  disabled: 'Disabled',
  popupHint: 'Highlight text on any page, then right-click to search.',
  settings: 'Settings',

  optionsSubtitle: 'Configure your right-click search menu',
  saved: 'Saved!',

  translationLanguage: 'Translation Language',
  translationLanguageDesc: 'Choose the target language for Google Translate.',
  uiLanguage: 'Interface Language',
  uiLanguageDesc: 'Set the language for this extension\'s interface.',

  theme: 'Theme',
  themeDesc: 'Choose the appearance of the extension.',
  themeLight: 'Light',
  themeDark: 'Dark',
  themeSystem: 'System',

  menuItems: 'Menu Items',
  menuItemsDesc: 'Toggle items on/off and reorder them. Only enabled items appear in the right-click menu.',

  addCustomSite: 'Add Custom Site',
  addCustomSiteDesc: 'Use %s in the URL where the selected text should go.',
  labelPlaceholder: 'Label (e.g. Twitter)',
  urlPlaceholder: 'URL (e.g. https://twitter.com/search?q=%s)',
  iconPlaceholder: 'Icon (e.g. 🔍)',
  addSite: 'Add Site',

  backupRestore: 'Backup & Restore',
  exportSettings: 'Export Settings',
  importSettings: 'Import Settings',
  resetToDefaults: 'Reset to Defaults',
  resetConfirm: 'Reset all settings to defaults? This cannot be undone.',
  invalidFile: 'Invalid settings file.',
  invalidUrl: 'URL must start with https:// or http://',

  catSearch: 'Search',
  catTranslate: 'Translate',
  catQuickJump: 'Quick Jump',
  catAiSearch: 'AI Search',
  catCustom: 'Custom',

  pinned: 'Pinned',
  pin: 'Pin to toolbar',
  unpin: 'Unpin from toolbar',

  searchHistory: 'Search History',
  searchHistoryDesc: 'Recent searches performed via Sidekick.',
  clearHistory: 'Clear History',
  clearHistoryConfirm: 'Clear all search history? This cannot be undone.',
  noHistory: 'No search history yet.',

  floatingToolbar: 'Floating Toolbar',
  floatingToolbarDesc: 'Show a floating toolbar with pinned items when you select text.',

  readAloud: 'Read Aloud',
  screenshot: 'Screenshot',

  addCustomPrompt: 'Add Custom AI Prompt',
  addCustomPromptDesc: 'Define a prompt template with %s for the selected text, then choose an AI to send it to.',
  promptPlaceholder: 'Prompt (e.g. Summarize this: %s)',
  targetAi: 'Target AI',
  addPrompt: 'Add Prompt',

  translateRead: 'Translate Read Aloud',
  translateReadDesc: 'Show a button on the toolbar to read selected text using the translation language voice.',
  affiliateLinks: 'Support with Affiliate Links',
  affiliateLinksDesc: 'Some search links include affiliate tags that help support Sidekick at no cost to you.',
  affiliateBanner: 'Some search links include affiliate tags that help support Sidekick at no extra cost to you. You can disable this below.',

  // Rate & Share
  enjoyingSidekick: 'Enjoying Sidekick?',
  rateSidekick: 'Rate',
  shareSidekick: 'Share',
};

const es: UiStrings = {
  appName: 'Sidekick',
  enabled: 'Activado',
  disabled: 'Desactivado',
  popupHint: 'Selecciona texto en cualquier página y haz clic derecho para buscar.',
  settings: 'Configuración',

  optionsSubtitle: 'Configura tu menú de búsqueda con clic derecho',
  saved: '¡Guardado!',

  translationLanguage: 'Idioma de traducción',
  translationLanguageDesc: 'Elige el idioma de destino para Google Translate.',
  uiLanguage: 'Idioma de la interfaz',
  uiLanguageDesc: 'Establece el idioma de la interfaz de esta extensión.',

  theme: 'Tema',
  themeDesc: 'Elige la apariencia de la extensión.',
  themeLight: 'Claro',
  themeDark: 'Oscuro',
  themeSystem: 'Sistema',

  menuItems: 'Elementos del menú',
  menuItemsDesc: 'Activa o desactiva elementos y reordénalos. Solo los elementos activados aparecen en el menú.',

  addCustomSite: 'Añadir sitio personalizado',
  addCustomSiteDesc: 'Usa %s en la URL donde debe ir el texto seleccionado.',
  labelPlaceholder: 'Nombre (ej. Twitter)',
  urlPlaceholder: 'URL (ej. https://twitter.com/search?q=%s)',
  iconPlaceholder: 'Icono (ej. 🔍)',
  addSite: 'Añadir sitio',

  backupRestore: 'Copia de seguridad',
  exportSettings: 'Exportar configuración',
  importSettings: 'Importar configuración',
  resetToDefaults: 'Restablecer valores',
  resetConfirm: '¿Restablecer toda la configuración? No se puede deshacer.',
  invalidFile: 'Archivo de configuración no válido.',
  invalidUrl: 'La URL debe comenzar con https:// o http://',

  catSearch: 'Búsqueda',
  catTranslate: 'Traducción',
  catQuickJump: 'Acceso rápido',
  catAiSearch: 'Búsqueda IA',
  catCustom: 'Personalizado',

  pinned: 'Fijado',
  pin: 'Fijar a la barra',
  unpin: 'Desfijar de la barra',

  searchHistory: 'Historial de búsqueda',
  searchHistoryDesc: 'Búsquedas recientes realizadas con Sidekick.',
  clearHistory: 'Borrar historial',
  clearHistoryConfirm: '¿Borrar todo el historial? No se puede deshacer.',
  noHistory: 'Sin historial de búsqueda.',

  floatingToolbar: 'Barra flotante',
  floatingToolbarDesc: 'Mostrar una barra flotante con elementos fijados al seleccionar texto.',

  readAloud: 'Leer en voz alta',
  screenshot: 'Captura de pantalla',

  addCustomPrompt: 'Añadir prompt de IA personalizado',
  addCustomPromptDesc: 'Define una plantilla de prompt con %s para el texto seleccionado, luego elige una IA.',
  promptPlaceholder: 'Prompt (ej. Resume esto: %s)',
  targetAi: 'IA de destino',
  addPrompt: 'Añadir prompt',

  translateRead: 'Lectura traducida en voz alta',
  translateReadDesc: 'Mostrar un botón en la barra para leer el texto seleccionado con la voz del idioma de traducción.',
  affiliateLinks: 'Apoyar con enlaces de afiliados',
  affiliateLinksDesc: 'Algunos enlaces de búsqueda incluyen etiquetas de afiliados que ayudan a apoyar Sidekick sin costo para ti.',
  affiliateBanner: 'Algunos enlaces de búsqueda incluyen etiquetas de afiliados que ayudan a apoyar Sidekick sin costo adicional. Puedes desactivarlo abajo.',

  // Rate & Share
  enjoyingSidekick: '¿Te gusta Sidekick?',
  rateSidekick: 'Valorar',
  shareSidekick: 'Compartir',
};

const fr: UiStrings = {
  appName: 'Sidekick',
  enabled: 'Activé',
  disabled: 'Désactivé',
  popupHint: 'Sélectionnez du texte sur une page, puis faites un clic droit pour rechercher.',
  settings: 'Paramètres',

  optionsSubtitle: 'Configurez votre menu de recherche contextuel',
  saved: 'Enregistré !',

  translationLanguage: 'Langue de traduction',
  translationLanguageDesc: 'Choisissez la langue cible pour Google Translate.',
  uiLanguage: 'Langue de l\'interface',
  uiLanguageDesc: 'Définissez la langue de l\'interface de cette extension.',

  theme: 'Thème',
  themeDesc: 'Choisissez l\'apparence de l\'extension.',
  themeLight: 'Clair',
  themeDark: 'Sombre',
  themeSystem: 'Système',

  menuItems: 'Éléments du menu',
  menuItemsDesc: 'Activez/désactivez les éléments et réorganisez-les. Seuls les éléments activés apparaissent dans le menu.',

  addCustomSite: 'Ajouter un site personnalisé',
  addCustomSiteDesc: 'Utilisez %s dans l\'URL à l\'endroit où le texte sélectionné doit apparaître.',
  labelPlaceholder: 'Nom (ex. Twitter)',
  urlPlaceholder: 'URL (ex. https://twitter.com/search?q=%s)',
  iconPlaceholder: 'Icône (ex. 🔍)',
  addSite: 'Ajouter le site',

  backupRestore: 'Sauvegarde et restauration',
  exportSettings: 'Exporter les paramètres',
  importSettings: 'Importer les paramètres',
  resetToDefaults: 'Réinitialiser',
  resetConfirm: 'Réinitialiser tous les paramètres ? Cette action est irréversible.',
  invalidFile: 'Fichier de paramètres invalide.',
  invalidUrl: "L'URL doit commencer par https:// ou http://",

  catSearch: 'Recherche',
  catTranslate: 'Traduction',
  catQuickJump: 'Accès rapide',
  catAiSearch: 'Recherche IA',
  catCustom: 'Personnalisé',

  pinned: 'Épinglé',
  pin: 'Épingler à la barre',
  unpin: 'Détacher de la barre',

  searchHistory: 'Historique de recherche',
  searchHistoryDesc: 'Recherches récentes effectuées via Sidekick.',
  clearHistory: 'Effacer l\'historique',
  clearHistoryConfirm: 'Effacer tout l\'historique ? Cette action est irréversible.',
  noHistory: 'Aucun historique de recherche.',

  floatingToolbar: 'Barre flottante',
  floatingToolbarDesc: 'Afficher une barre flottante avec les éléments épinglés lors de la sélection de texte.',

  readAloud: 'Lire à voix haute',
  screenshot: 'Capture d\'écran',

  addCustomPrompt: 'Ajouter un prompt IA personnalisé',
  addCustomPromptDesc: 'Définissez un modèle de prompt avec %s pour le texte sélectionné, puis choisissez une IA.',
  promptPlaceholder: 'Prompt (ex. Résume ceci : %s)',
  targetAi: 'IA cible',
  addPrompt: 'Ajouter le prompt',

  translateRead: 'Lecture traduite à voix haute',
  translateReadDesc: 'Afficher un bouton pour lire le texte sélectionné avec la voix de la langue de traduction.',
  affiliateLinks: 'Soutenir avec des liens affiliés',
  affiliateLinksDesc: 'Certains liens de recherche incluent des tags d\'affiliation qui aident à soutenir Sidekick sans frais pour vous.',
  affiliateBanner: 'Certains liens de recherche incluent des tags d\'affiliation qui aident à soutenir Sidekick sans frais supplémentaires. Vous pouvez désactiver cela ci-dessous.',

  // Rate & Share
  enjoyingSidekick: 'Vous aimez Sidekick ?',
  rateSidekick: 'Noter',
  shareSidekick: 'Partager',
};

const de: UiStrings = {
  appName: 'Sidekick',
  enabled: 'Aktiviert',
  disabled: 'Deaktiviert',
  popupHint: 'Text auf einer Seite markieren, dann rechtsklicken zum Suchen.',
  settings: 'Einstellungen',

  optionsSubtitle: 'Konfiguriere dein Rechtsklick-Suchmenü',
  saved: 'Gespeichert!',

  translationLanguage: 'Übersetzungssprache',
  translationLanguageDesc: 'Wähle die Zielsprache für Google Translate.',
  uiLanguage: 'Oberflächensprache',
  uiLanguageDesc: 'Lege die Sprache der Benutzeroberfläche fest.',

  theme: 'Design',
  themeDesc: 'Wähle das Erscheinungsbild der Erweiterung.',
  themeLight: 'Hell',
  themeDark: 'Dunkel',
  themeSystem: 'System',

  menuItems: 'Menüeinträge',
  menuItemsDesc: 'Einträge ein-/ausschalten und umsortieren. Nur aktivierte Einträge erscheinen im Menü.',

  addCustomSite: 'Eigene Seite hinzufügen',
  addCustomSiteDesc: 'Verwende %s in der URL, wo der markierte Text eingefügt werden soll.',
  labelPlaceholder: 'Name (z.B. Twitter)',
  urlPlaceholder: 'URL (z.B. https://twitter.com/search?q=%s)',
  iconPlaceholder: 'Symbol (z.B. 🔍)',
  addSite: 'Seite hinzufügen',

  backupRestore: 'Sichern & Wiederherstellen',
  exportSettings: 'Einstellungen exportieren',
  importSettings: 'Einstellungen importieren',
  resetToDefaults: 'Zurücksetzen',
  resetConfirm: 'Alle Einstellungen zurücksetzen? Dies kann nicht rückgängig gemacht werden.',
  invalidFile: 'Ungültige Einstellungsdatei.',
  invalidUrl: 'Die URL muss mit https:// oder http:// beginnen',

  catSearch: 'Suche',
  catTranslate: 'Übersetzen',
  catQuickJump: 'Schnellzugriff',
  catAiSearch: 'KI-Suche',
  catCustom: 'Benutzerdefiniert',

  pinned: 'Angeheftet',
  pin: 'An Leiste anheften',
  unpin: 'Von Leiste lösen',

  searchHistory: 'Suchverlauf',
  searchHistoryDesc: 'Letzte Suchanfragen über Sidekick.',
  clearHistory: 'Verlauf löschen',
  clearHistoryConfirm: 'Gesamten Verlauf löschen? Dies kann nicht rückgängig gemacht werden.',
  noHistory: 'Noch kein Suchverlauf.',

  floatingToolbar: 'Schwebendes Menü',
  floatingToolbarDesc: 'Schwebendes Menü mit angehefteten Einträgen bei Textauswahl anzeigen.',

  readAloud: 'Vorlesen',
  screenshot: 'Bildschirmfoto',

  addCustomPrompt: 'Eigenen KI-Prompt hinzufügen',
  addCustomPromptDesc: 'Erstelle eine Prompt-Vorlage mit %s für den markierten Text und wähle eine KI.',
  promptPlaceholder: 'Prompt (z.B. Fasse zusammen: %s)',
  targetAi: 'Ziel-KI',
  addPrompt: 'Prompt hinzufügen',

  translateRead: 'Übersetzt vorlesen',
  translateReadDesc: 'Zeige eine Schaltfläche zum Vorlesen des Textes in der Übersetzungssprache.',
  affiliateLinks: 'Mit Affiliate-Links unterstützen',
  affiliateLinksDesc: 'Einige Suchlinks enthalten Affiliate-Tags, die Sidekick ohne Kosten für dich unterstützen.',
  affiliateBanner: 'Einige Suchlinks enthalten Affiliate-Tags, die Sidekick ohne zusätzliche Kosten unterstützen. Du kannst dies unten deaktivieren.',

  // Rate & Share
  enjoyingSidekick: 'Gefällt dir Sidekick?',
  rateSidekick: 'Bewerten',
  shareSidekick: 'Teilen',
};

const ru: UiStrings = {
  appName: 'Sidekick',
  enabled: 'Включено',
  disabled: 'Выключено',
  popupHint: 'Выделите текст на странице и нажмите правую кнопку мыши для поиска.',
  settings: 'Настройки',

  optionsSubtitle: 'Настройте контекстное меню поиска',
  saved: 'Сохранено!',

  translationLanguage: 'Язык перевода',
  translationLanguageDesc: 'Выберите целевой язык для Google Translate.',
  uiLanguage: 'Язык интерфейса',
  uiLanguageDesc: 'Установите язык интерфейса расширения.',

  theme: 'Тема',
  themeDesc: 'Выберите внешний вид расширения.',
  themeLight: 'Светлая',
  themeDark: 'Тёмная',
  themeSystem: 'Системная',

  menuItems: 'Элементы меню',
  menuItemsDesc: 'Включайте/выключайте элементы и меняйте порядок. Только включённые элементы отображаются в меню.',

  addCustomSite: 'Добавить свой сайт',
  addCustomSiteDesc: 'Используйте %s в URL, куда нужно подставить выделенный текст.',
  labelPlaceholder: 'Название (напр. Twitter)',
  urlPlaceholder: 'URL (напр. https://twitter.com/search?q=%s)',
  iconPlaceholder: 'Иконка (напр. 🔍)',
  addSite: 'Добавить сайт',

  backupRestore: 'Резервное копирование',
  exportSettings: 'Экспорт настроек',
  importSettings: 'Импорт настроек',
  resetToDefaults: 'Сбросить настройки',
  resetConfirm: 'Сбросить все настройки? Это действие нельзя отменить.',
  invalidFile: 'Недопустимый файл настроек.',
  invalidUrl: 'URL должен начинаться с https:// или http://',

  catSearch: 'Поиск',
  catTranslate: 'Перевод',
  catQuickJump: 'Быстрый переход',
  catAiSearch: 'ИИ-поиск',
  catCustom: 'Пользовательские',

  pinned: 'Закреплено',
  pin: 'Закрепить на панели',
  unpin: 'Открепить от панели',

  searchHistory: 'История поиска',
  searchHistoryDesc: 'Недавние поисковые запросы через Sidekick.',
  clearHistory: 'Очистить историю',
  clearHistoryConfirm: 'Очистить всю историю? Это действие нельзя отменить.',
  noHistory: 'История поиска пуста.',

  floatingToolbar: 'Плавающая панель',
  floatingToolbarDesc: 'Показывать плавающую панель с закреплёнными элементами при выделении текста.',

  readAloud: 'Прочитать вслух',
  screenshot: 'Снимок экрана',

  addCustomPrompt: 'Добавить свой промпт для ИИ',
  addCustomPromptDesc: 'Создайте шаблон промпта с %s для выделенного текста, затем выберите ИИ.',
  promptPlaceholder: 'Промпт (напр. Резюмируй это: %s)',
  targetAi: 'Целевой ИИ',
  addPrompt: 'Добавить промпт',

  translateRead: 'Прочитать перевод вслух',
  translateReadDesc: 'Показать кнопку для чтения выделенного текста голосом языка перевода.',
  affiliateLinks: 'Поддержать через партнёрские ссылки',
  affiliateLinksDesc: 'Некоторые ссылки содержат партнёрские метки, которые помогают поддержать Sidekick без затрат для вас.',
  affiliateBanner: 'Некоторые ссылки содержат партнёрские метки, которые помогают поддержать Sidekick без дополнительных затрат. Вы можете отключить это ниже.',

  // Rate & Share
  enjoyingSidekick: 'Нравится Sidekick?',
  rateSidekick: 'Оценить',
  shareSidekick: 'Поделиться',
};

const ja: UiStrings = {
  appName: 'Sidekick',
  enabled: '有効',
  disabled: '無効',
  popupHint: 'ページ上のテキストを選択し、右クリックで検索します。',
  settings: '設定',

  optionsSubtitle: '右クリック検索メニューを設定',
  saved: '保存しました！',

  translationLanguage: '翻訳言語',
  translationLanguageDesc: 'Google翻訳の対象言語を選択してください。',
  uiLanguage: 'インターフェース言語',
  uiLanguageDesc: 'この拡張機能のインターフェース言語を設定します。',

  theme: 'テーマ',
  themeDesc: '拡張機能の外観を選択します。',
  themeLight: 'ライト',
  themeDark: 'ダーク',
  themeSystem: 'システム',

  menuItems: 'メニュー項目',
  menuItemsDesc: '項目のオン/オフを切り替え、並び替えができます。有効な項目のみメニューに表示されます。',

  addCustomSite: 'カスタムサイトを追加',
  addCustomSiteDesc: 'URLの中で選択テキストを挿入する場所に%sを使用してください。',
  labelPlaceholder: 'ラベル（例：Twitter）',
  urlPlaceholder: 'URL（例：https://twitter.com/search?q=%s）',
  iconPlaceholder: 'アイコン（例：🔍）',
  addSite: 'サイトを追加',

  backupRestore: 'バックアップと復元',
  exportSettings: '設定をエクスポート',
  importSettings: '設定をインポート',
  resetToDefaults: '初期設定に戻す',
  resetConfirm: 'すべての設定を初期値に戻しますか？この操作は元に戻せません。',
  invalidFile: '無効な設定ファイルです。',
  invalidUrl: 'URLはhttps://またはhttp://で始まる必要があります',

  catSearch: '検索',
  catTranslate: '翻訳',
  catQuickJump: 'クイックジャンプ',
  catAiSearch: 'AI検索',
  catCustom: 'カスタム',

  pinned: '固定済み',
  pin: 'ツールバーに固定',
  unpin: 'ツールバーから外す',

  searchHistory: '検索履歴',
  searchHistoryDesc: 'Sidekickでの最近の検索。',
  clearHistory: '履歴を消去',
  clearHistoryConfirm: 'すべての検索履歴を消去しますか？この操作は元に戻せません。',
  noHistory: '検索履歴はまだありません。',

  floatingToolbar: 'フローティングツールバー',
  floatingToolbarDesc: 'テキスト選択時に固定アイテムのフローティングツールバーを表示します。',

  readAloud: '読み上げ',
  screenshot: 'スクリーンショット',

  addCustomPrompt: 'カスタムAIプロンプトを追加',
  addCustomPromptDesc: '選択テキスト用の%sを含むプロンプトテンプレートを定義し、AIを選択してください。',
  promptPlaceholder: 'プロンプト（例：これを要約して: %s）',
  targetAi: '対象AI',
  addPrompt: 'プロンプトを追加',

  translateRead: '翻訳して読み上げ',
  translateReadDesc: '翻訳言語の音声でテキストを読み上げるボタンを表示します。',
  affiliateLinks: 'アフィリエイトリンクでサポート',
  affiliateLinksDesc: '一部の検索リンクにはSidekickをサポートするアフィリエイトタグが含まれています。',
  affiliateBanner: '一部の検索リンクにはSidekickをサポートするアフィリエイトタグが含まれています。下で無効にできます。',

  // Rate & Share
  enjoyingSidekick: 'Sidekickを気に入りましたか？',
  rateSidekick: '評価',
  shareSidekick: '共有',
};

const zhCN: UiStrings = {
  appName: 'Sidekick',
  enabled: '已启用',
  disabled: '已禁用',
  popupHint: '在任意页面上选中文本，然后右键点击即可搜索。',
  settings: '设置',

  optionsSubtitle: '配置您的右键搜索菜单',
  saved: '已保存！',

  translationLanguage: '翻译语言',
  translationLanguageDesc: '选择Google翻译的目标语言。',
  uiLanguage: '界面语言',
  uiLanguageDesc: '设置此扩展的界面语言。',

  theme: '主题',
  themeDesc: '选择扩展的外观。',
  themeLight: '浅色',
  themeDark: '深色',
  themeSystem: '跟随系统',

  menuItems: '菜单项',
  menuItemsDesc: '切换菜单项的启用/禁用状态并调整顺序。只有启用的项目会出现在右键菜单中。',

  addCustomSite: '添加自定义网站',
  addCustomSiteDesc: '在URL中使用%s表示选中文本的插入位置。',
  labelPlaceholder: '名称（例如 Twitter）',
  urlPlaceholder: 'URL（例如 https://twitter.com/search?q=%s）',
  iconPlaceholder: '图标（例如 🔍）',
  addSite: '添加网站',

  backupRestore: '备份与恢复',
  exportSettings: '导出设置',
  importSettings: '导入设置',
  resetToDefaults: '恢复默认',
  resetConfirm: '恢复所有默认设置？此操作无法撤销。',
  invalidFile: '无效的设置文件。',
  invalidUrl: 'URL必须以https://或http://开头',

  catSearch: '搜索',
  catTranslate: '翻译',
  catQuickJump: '快捷跳转',
  catAiSearch: 'AI搜索',
  catCustom: '自定义',

  pinned: '已固定',
  pin: '固定到工具栏',
  unpin: '从工具栏移除',

  searchHistory: '搜索历史',
  searchHistoryDesc: '通过Sidekick进行的最近搜索。',
  clearHistory: '清除历史',
  clearHistoryConfirm: '清除所有搜索历史？此操作无法撤销。',
  noHistory: '暂无搜索历史。',

  floatingToolbar: '浮动工具栏',
  floatingToolbarDesc: '选择文本时显示带有固定项目的浮动工具栏。',

  readAloud: '朗读',
  screenshot: '截图',

  addCustomPrompt: '添加自定义AI提示词',
  addCustomPromptDesc: '定义一个包含%s的提示词模板用于选中文本，然后选择AI。',
  promptPlaceholder: '提示词（例如 总结一下：%s）',
  targetAi: '目标AI',
  addPrompt: '添加提示词',

  translateRead: '翻译朗读',
  translateReadDesc: '显示按钮以使用翻译语言语音朗读选中文本。',
  affiliateLinks: '通过联盟链接支持',
  affiliateLinksDesc: '部分搜索链接包含联盟标签，帮助支持Sidekick，不会产生额外费用。',
  affiliateBanner: '部分搜索链接包含联盟标签，帮助支持Sidekick，不会产生额外费用。您可以在下方禁用。',

  // Rate & Share
  enjoyingSidekick: '喜欢 Sidekick 吗？',
  rateSidekick: '评分',
  shareSidekick: '分享',
};

const ko: UiStrings = {
  appName: 'Sidekick',
  enabled: '활성화됨',
  disabled: '비활성화됨',
  popupHint: '페이지에서 텍스트를 선택한 후 마우스 오른쪽 버튼을 클릭하여 검색하세요.',
  settings: '설정',

  optionsSubtitle: '우클릭 검색 메뉴를 설정하세요',
  saved: '저장됨!',

  translationLanguage: '번역 언어',
  translationLanguageDesc: 'Google 번역의 대상 언어를 선택하세요.',
  uiLanguage: '인터페이스 언어',
  uiLanguageDesc: '이 확장 프로그램의 인터페이스 언어를 설정하세요.',

  theme: '테마',
  themeDesc: '확장 프로그램의 외관을 선택하세요.',
  themeLight: '라이트',
  themeDark: '다크',
  themeSystem: '시스템',

  menuItems: '메뉴 항목',
  menuItemsDesc: '항목을 켜고 끄거나 순서를 변경하세요. 활성화된 항목만 메뉴에 표시됩니다.',

  addCustomSite: '사용자 정의 사이트 추가',
  addCustomSiteDesc: 'URL에서 선택한 텍스트가 들어갈 위치에 %s를 사용하세요.',
  labelPlaceholder: '이름 (예: Twitter)',
  urlPlaceholder: 'URL (예: https://twitter.com/search?q=%s)',
  iconPlaceholder: '아이콘 (예: 🔍)',
  addSite: '사이트 추가',

  backupRestore: '백업 및 복원',
  exportSettings: '설정 내보내기',
  importSettings: '설정 가져오기',
  resetToDefaults: '기본값으로 초기화',
  resetConfirm: '모든 설정을 초기화하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
  invalidFile: '잘못된 설정 파일입니다.',
  invalidUrl: 'URL은 https:// 또는 http://로 시작해야 합니다',

  catSearch: '검색',
  catTranslate: '번역',
  catQuickJump: '빠른 이동',
  catAiSearch: 'AI 검색',
  catCustom: '사용자 정의',

  pinned: '고정됨',
  pin: '툴바에 고정',
  unpin: '툴바에서 해제',

  searchHistory: '검색 기록',
  searchHistoryDesc: 'Sidekick을 통한 최근 검색.',
  clearHistory: '기록 삭제',
  clearHistoryConfirm: '모든 검색 기록을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
  noHistory: '검색 기록이 없습니다.',

  floatingToolbar: '플로팅 툴바',
  floatingToolbarDesc: '텍스트 선택 시 고정된 항목이 있는 플로팅 툴바를 표시합니다.',

  readAloud: '소리내어 읽기',
  screenshot: '스크린샷',

  addCustomPrompt: '사용자 정의 AI 프롬프트 추가',
  addCustomPromptDesc: '선택한 텍스트에 %s를 포함한 프롬프트 템플릿을 정의하고 AI를 선택하세요.',
  promptPlaceholder: '프롬프트 (예: 이것을 요약해줘: %s)',
  targetAi: '대상 AI',
  addPrompt: '프롬프트 추가',

  translateRead: '번역 읽기',
  translateReadDesc: '번역 언어 음성으로 선택한 텍스트를 읽는 버튼을 표시합니다.',
  affiliateLinks: '제휴 링크로 지원',
  affiliateLinksDesc: '일부 검색 링크에는 Sidekick을 지원하는 제휴 태그가 포함되어 있습니다.',
  affiliateBanner: '일부 검색 링크에는 Sidekick을 지원하는 제휴 태그가 포함되어 있습니다. 아래에서 비활성화할 수 있습니다.',

  // Rate & Share
  enjoyingSidekick: 'Sidekick이 마음에 드시나요?',
  rateSidekick: '평가',
  shareSidekick: '공유',
};

const ar: UiStrings = {
  appName: 'Sidekick',
  enabled: 'مفعّل',
  disabled: 'معطّل',
  popupHint: 'حدد نصاً في أي صفحة، ثم انقر بزر الماوس الأيمن للبحث.',
  settings: 'الإعدادات',

  optionsSubtitle: 'تخصيص قائمة البحث بالنقر الأيمن',
  saved: 'تم الحفظ!',

  translationLanguage: 'لغة الترجمة',
  translationLanguageDesc: 'اختر اللغة المستهدفة لترجمة Google.',
  uiLanguage: 'لغة الواجهة',
  uiLanguageDesc: 'اضبط لغة واجهة هذا الامتداد.',

  theme: 'المظهر',
  themeDesc: 'اختر مظهر الامتداد.',
  themeLight: 'فاتح',
  themeDark: 'داكن',
  themeSystem: 'النظام',

  menuItems: 'عناصر القائمة',
  menuItemsDesc: 'تفعيل/تعطيل العناصر وإعادة ترتيبها. تظهر العناصر المفعّلة فقط في القائمة.',

  addCustomSite: 'إضافة موقع مخصص',
  addCustomSiteDesc: 'استخدم %s في الرابط حيث يجب وضع النص المحدد.',
  labelPlaceholder: 'الاسم (مثال: Twitter)',
  urlPlaceholder: 'الرابط (مثال: https://twitter.com/search?q=%s)',
  iconPlaceholder: 'الأيقونة (مثال: 🔍)',
  addSite: 'إضافة موقع',

  backupRestore: 'النسخ الاحتياطي والاستعادة',
  exportSettings: 'تصدير الإعدادات',
  importSettings: 'استيراد الإعدادات',
  resetToDefaults: 'إعادة التعيين',
  resetConfirm: 'إعادة تعيين جميع الإعدادات؟ لا يمكن التراجع عن هذا.',
  invalidFile: 'ملف إعدادات غير صالح.',
  invalidUrl: 'يجب أن يبدأ الرابط بـ https:// أو http://',

  catSearch: 'بحث',
  catTranslate: 'ترجمة',
  catQuickJump: 'وصول سريع',
  catAiSearch: 'بحث بالذكاء الاصطناعي',
  catCustom: 'مخصص',

  pinned: 'مثبّت',
  pin: 'تثبيت في الشريط',
  unpin: 'إزالة من الشريط',

  searchHistory: 'سجل البحث',
  searchHistoryDesc: 'عمليات البحث الأخيرة عبر Sidekick.',
  clearHistory: 'مسح السجل',
  clearHistoryConfirm: 'مسح كل سجل البحث؟ لا يمكن التراجع عن هذا.',
  noHistory: 'لا يوجد سجل بحث بعد.',

  floatingToolbar: 'شريط أدوات عائم',
  floatingToolbarDesc: 'عرض شريط أدوات عائم بالعناصر المثبتة عند تحديد النص.',

  readAloud: 'قراءة بصوت عالٍ',
  screenshot: 'لقطة شاشة',

  addCustomPrompt: 'إضافة أمر ذكاء اصطناعي مخصص',
  addCustomPromptDesc: 'حدد قالب أمر يحتوي على %s للنص المحدد، ثم اختر الذكاء الاصطناعي.',
  promptPlaceholder: 'الأمر (مثال: لخص هذا: %s)',
  targetAi: 'الذكاء الاصطناعي المستهدف',
  addPrompt: 'إضافة أمر',

  translateRead: 'قراءة الترجمة بصوت عالٍ',
  translateReadDesc: 'عرض زر لقراءة النص المحدد بصوت لغة الترجمة.',
  affiliateLinks: 'الدعم عبر روابط الإحالة',
  affiliateLinksDesc: 'بعض روابط البحث تحتوي على علامات إحالة تساعد في دعم Sidekick بدون تكلفة عليك.',
  affiliateBanner: 'بعض روابط البحث تحتوي على علامات إحالة تساعد في دعم Sidekick بدون تكلفة إضافية. يمكنك تعطيل ذلك أدناه.',

  // Rate & Share
  enjoyingSidekick: 'هل تستمتع بـ Sidekick؟',
  rateSidekick: 'تقييم',
  shareSidekick: 'مشاركة',
};

const pt: UiStrings = {
  appName: 'Sidekick',
  enabled: 'Ativado',
  disabled: 'Desativado',
  popupHint: 'Selecione texto em qualquer página e clique com o botão direito para pesquisar.',
  settings: 'Configurações',

  optionsSubtitle: 'Configure o menu de pesquisa do clique direito',
  saved: 'Salvo!',

  translationLanguage: 'Idioma de tradução',
  translationLanguageDesc: 'Escolha o idioma de destino para o Google Tradutor.',
  uiLanguage: 'Idioma da interface',
  uiLanguageDesc: 'Defina o idioma da interface desta extensão.',

  theme: 'Tema',
  themeDesc: 'Escolha a aparência da extensão.',
  themeLight: 'Claro',
  themeDark: 'Escuro',
  themeSystem: 'Sistema',

  menuItems: 'Itens do menu',
  menuItemsDesc: 'Ative/desative itens e reordene-os. Apenas itens ativados aparecem no menu.',

  addCustomSite: 'Adicionar site personalizado',
  addCustomSiteDesc: 'Use %s na URL onde o texto selecionado deve ser inserido.',
  labelPlaceholder: 'Nome (ex. Twitter)',
  urlPlaceholder: 'URL (ex. https://twitter.com/search?q=%s)',
  iconPlaceholder: 'Ícone (ex. 🔍)',
  addSite: 'Adicionar site',

  backupRestore: 'Backup e restauração',
  exportSettings: 'Exportar configurações',
  importSettings: 'Importar configurações',
  resetToDefaults: 'Restaurar padrões',
  resetConfirm: 'Restaurar todas as configurações? Isso não pode ser desfeito.',
  invalidFile: 'Arquivo de configurações inválido.',
  invalidUrl: 'O URL deve começar com https:// ou http://',

  catSearch: 'Pesquisa',
  catTranslate: 'Tradução',
  catQuickJump: 'Acesso rápido',
  catAiSearch: 'Pesquisa IA',
  catCustom: 'Personalizado',

  pinned: 'Fixado',
  pin: 'Fixar na barra',
  unpin: 'Desafixar da barra',

  searchHistory: 'Histórico de pesquisa',
  searchHistoryDesc: 'Pesquisas recentes realizadas via Sidekick.',
  clearHistory: 'Limpar histórico',
  clearHistoryConfirm: 'Limpar todo o histórico? Isso não pode ser desfeito.',
  noHistory: 'Nenhum histórico de pesquisa.',

  floatingToolbar: 'Barra flutuante',
  floatingToolbarDesc: 'Mostrar barra flutuante com itens fixados ao selecionar texto.',

  readAloud: 'Ler em voz alta',
  screenshot: 'Captura de tela',

  addCustomPrompt: 'Adicionar prompt de IA personalizado',
  addCustomPromptDesc: 'Defina um modelo de prompt com %s para o texto selecionado, depois escolha uma IA.',
  promptPlaceholder: 'Prompt (ex. Resuma isto: %s)',
  targetAi: 'IA alvo',
  addPrompt: 'Adicionar prompt',

  translateRead: 'Ler tradução em voz alta',
  translateReadDesc: 'Mostrar um botão para ler o texto selecionado com a voz do idioma de tradução.',
  affiliateLinks: 'Apoiar com links de afiliados',
  affiliateLinksDesc: 'Alguns links de pesquisa incluem tags de afiliados que ajudam a apoiar o Sidekick sem custo para você.',
  affiliateBanner: 'Alguns links de pesquisa incluem tags de afiliados que ajudam a apoiar o Sidekick sem custo adicional. Você pode desativar isso abaixo.',

  // Rate & Share
  enjoyingSidekick: 'Gostando do Sidekick?',
  rateSidekick: 'Avaliar',
  shareSidekick: 'Compartilhar',
};

const uk: UiStrings = {
  appName: 'Sidekick',
  enabled: 'Увімкнено',
  disabled: 'Вимкнено',
  popupHint: 'Виділіть текст на будь-якій сторінці та натисніть праву кнопку миші для пошуку.',
  settings: 'Налаштування',

  optionsSubtitle: 'Налаштуйте контекстне меню пошуку',
  saved: 'Збережено!',

  translationLanguage: 'Мова перекладу',
  translationLanguageDesc: 'Оберіть цільову мову для Google Translate.',
  uiLanguage: 'Мова інтерфейсу',
  uiLanguageDesc: 'Встановіть мову інтерфейсу цього розширення.',

  theme: 'Тема',
  themeDesc: 'Оберіть зовнішній вигляд розширення.',
  themeLight: 'Світла',
  themeDark: 'Темна',
  themeSystem: 'Системна',

  menuItems: 'Елементи меню',
  menuItemsDesc: 'Вмикайте/вимикайте елементи та змінюйте порядок. Тільки увімкнені елементи відображаються в меню.',

  addCustomSite: 'Додати свій сайт',
  addCustomSiteDesc: 'Використовуйте %s в URL, де потрібно підставити виділений текст.',
  labelPlaceholder: 'Назва (напр. Twitter)',
  urlPlaceholder: 'URL (напр. https://twitter.com/search?q=%s)',
  iconPlaceholder: 'Іконка (напр. 🔍)',
  addSite: 'Додати сайт',

  backupRestore: 'Резервне копіювання',
  exportSettings: 'Експорт налаштувань',
  importSettings: 'Імпорт налаштувань',
  resetToDefaults: 'Скинути налаштування',
  resetConfirm: 'Скинути всі налаштування? Цю дію не можна скасувати.',
  invalidFile: 'Недійсний файл налаштувань.',
  invalidUrl: 'URL має починатися з https:// або http://',

  catSearch: 'Пошук',
  catTranslate: 'Переклад',
  catQuickJump: 'Швидкий перехід',
  catAiSearch: 'ШІ-пошук',
  catCustom: 'Користувацькі',

  pinned: 'Закріплено',
  pin: 'Закріпити на панелі',
  unpin: 'Відкріпити від панелі',

  searchHistory: 'Історія пошуку',
  searchHistoryDesc: 'Нещодавні пошукові запити через Sidekick.',
  clearHistory: 'Очистити історію',
  clearHistoryConfirm: 'Очистити всю історію? Цю дію не можна скасувати.',
  noHistory: 'Історія пошуку порожня.',

  floatingToolbar: 'Плаваюча панель',
  floatingToolbarDesc: 'Показувати плаваючу панель із закріпленими елементами при виділенні тексту.',

  readAloud: 'Прочитати вголос',
  screenshot: 'Знімок екрана',

  addCustomPrompt: 'Додати власний промпт для ШІ',
  addCustomPromptDesc: 'Створіть шаблон промпту з %s для виділеного тексту, потім оберіть ШІ.',
  promptPlaceholder: 'Промпт (напр. Підсумуй це: %s)',
  targetAi: 'Цільовий ШІ',
  addPrompt: 'Додати промпт',

  translateRead: 'Прочитати переклад вголос',
  translateReadDesc: 'Показати кнопку для читання виділеного тексту голосом мови перекладу.',
  affiliateLinks: 'Підтримати через партнерські посилання',
  affiliateLinksDesc: 'Деякі посилання містять партнерські мітки, які допомагають підтримати Sidekick без витрат для вас.',
  affiliateBanner: 'Деякі посилання містять партнерські мітки, які допомагають підтримати Sidekick без додаткових витрат. Ви можете вимкнути це нижче.',

  // Rate & Share
  enjoyingSidekick: 'Подобається Sidekick?',
  rateSidekick: 'Оцінити',
  shareSidekick: 'Поділитися',
};

const tr: UiStrings = {
  appName: 'Sidekick',
  enabled: 'Etkin',
  disabled: 'Devre dışı',
  popupHint: 'Herhangi bir sayfada metin seçin, ardından sağ tıklayarak arama yapın.',
  settings: 'Ayarlar',

  optionsSubtitle: 'Sağ tık arama menüsünü yapılandırın',
  saved: 'Kaydedildi!',

  translationLanguage: 'Çeviri dili',
  translationLanguageDesc: 'Google Çeviri için hedef dili seçin.',
  uiLanguage: 'Arayüz dili',
  uiLanguageDesc: 'Bu eklentinin arayüz dilini ayarlayın.',

  theme: 'Tema',
  themeDesc: 'Eklentinin görünümünü seçin.',
  themeLight: 'Açık',
  themeDark: 'Koyu',
  themeSystem: 'Sistem',

  menuItems: 'Menü öğeleri',
  menuItemsDesc: 'Öğeleri açın/kapatın ve yeniden sıralayın. Yalnızca etkin öğeler menüde görünür.',

  addCustomSite: 'Özel site ekle',
  addCustomSiteDesc: 'Seçilen metnin yerleştirileceği URL\'de %s kullanın.',
  labelPlaceholder: 'Ad (örn. Twitter)',
  urlPlaceholder: 'URL (örn. https://twitter.com/search?q=%s)',
  iconPlaceholder: 'Simge (örn. 🔍)',
  addSite: 'Site ekle',

  backupRestore: 'Yedekleme ve geri yükleme',
  exportSettings: 'Ayarları dışa aktar',
  importSettings: 'Ayarları içe aktar',
  resetToDefaults: 'Varsayılanlara sıfırla',
  resetConfirm: 'Tüm ayarlar sıfırlansın mı? Bu işlem geri alınamaz.',
  invalidFile: 'Geçersiz ayar dosyası.',
  invalidUrl: "URL https:// veya http:// ile başlamalıdır",

  catSearch: 'Arama',
  catTranslate: 'Çeviri',
  catQuickJump: 'Hızlı erişim',
  catAiSearch: 'Yapay Zeka Arama',
  catCustom: 'Özel',

  pinned: 'Sabitlendi',
  pin: 'Araç çubuğuna sabitle',
  unpin: 'Araç çubuğundan kaldır',

  searchHistory: 'Arama geçmişi',
  searchHistoryDesc: 'Sidekick ile yapılan son aramalar.',
  clearHistory: 'Geçmişi temizle',
  clearHistoryConfirm: 'Tüm arama geçmişi silinsin mi? Bu işlem geri alınamaz.',
  noHistory: 'Henüz arama geçmişi yok.',

  floatingToolbar: 'Kayan araç çubuğu',
  floatingToolbarDesc: 'Metin seçildiğinde sabitlenmiş öğelerle kayan araç çubuğu göster.',

  readAloud: 'Sesli oku',
  screenshot: 'Ekran görüntüsü',

  addCustomPrompt: 'Özel AI promptu ekle',
  addCustomPromptDesc: 'Seçili metin için %s içeren bir prompt şablonu tanımlayın, sonra bir AI seçin.',
  promptPlaceholder: 'Prompt (örn. Bunu özetle: %s)',
  targetAi: 'Hedef AI',
  addPrompt: 'Prompt ekle',

  translateRead: 'Çeviriyi sesli oku',
  translateReadDesc: 'Seçili metni çeviri dili sesiyle okumak için bir düğme göster.',
  affiliateLinks: 'Ortaklık bağlantılarıyla destek ol',
  affiliateLinksDesc: 'Bazı arama bağlantıları, size maliyet olmadan Sidekick\'i destekleyen ortaklık etiketleri içerir.',
  affiliateBanner: 'Bazı arama bağlantıları, Sidekick\'i destekleyen ortaklık etiketleri içerir. Bunu aşağıdan devre dışı bırakabilirsiniz.',

  // Rate & Share
  enjoyingSidekick: 'Sidekick\'i beğendiniz mi?',
  rateSidekick: 'Değerlendir',
  shareSidekick: 'Paylaş',
};

const he: UiStrings = {
  appName: 'Sidekick',
  enabled: 'מופעל',
  disabled: 'מושבת',
  popupHint: 'סמנו טקסט בכל דף, ולחצו לחיצה ימנית כדי לחפש.',
  settings: 'הגדרות',

  optionsSubtitle: 'הגדירו את תפריט החיפוש בלחיצה ימנית',
  saved: '!נשמר',

  translationLanguage: 'שפת תרגום',
  translationLanguageDesc: '.בחרו את שפת היעד עבור Google Translate',
  uiLanguage: 'שפת ממשק',
  uiLanguageDesc: '.הגדירו את שפת הממשק של התוסף',

  theme: 'ערכת נושא',
  themeDesc: '.בחרו את המראה של התוסף',
  themeLight: 'בהיר',
  themeDark: 'כהה',
  themeSystem: 'מערכת',

  menuItems: 'פריטי תפריט',
  menuItemsDesc: 'הפעילו/השביתו פריטים ושנו את הסדר. רק פריטים מופעלים מופיעים בתפריט.',

  addCustomSite: 'הוספת אתר מותאם אישית',
  addCustomSiteDesc: 'השתמשו ב-%s בכתובת ה-URL במקום שבו הטקסט המסומן צריך להופיע.',
  labelPlaceholder: '(Twitter .שם (לדוגמה',
  urlPlaceholder: '(https://twitter.com/search?q=%s .כתובת URL (לדוגמה',
  iconPlaceholder: '(🔍 .אייקון (לדוגמה',
  addSite: 'הוספת אתר',

  backupRestore: 'גיבוי ושחזור',
  exportSettings: 'ייצוא הגדרות',
  importSettings: 'ייבוא הגדרות',
  resetToDefaults: 'איפוס לברירת מחדל',
  resetConfirm: 'לאפס את כל ההגדרות? לא ניתן לבטל פעולה זו.',
  invalidFile: '.קובץ הגדרות לא תקין',
  invalidUrl: 'הכתובת חייבת להתחיל ב-https:// או http://',

  catSearch: 'חיפוש',
  catTranslate: 'תרגום',
  catQuickJump: 'גישה מהירה',
  catAiSearch: 'חיפוש AI',
  catCustom: 'מותאם אישית',

  pinned: 'מוצמד',
  pin: 'הצמד לסרגל',
  unpin: 'הסר מהסרגל',

  searchHistory: 'היסטוריית חיפוש',
  searchHistoryDesc: '.חיפושים אחרונים שבוצעו דרך Sidekick',
  clearHistory: 'נקה היסטוריה',
  clearHistoryConfirm: 'לנקות את כל היסטוריית החיפוש? לא ניתן לבטל פעולה זו.',
  noHistory: '.אין היסטוריית חיפוש עדיין',

  floatingToolbar: 'סרגל כלים צף',
  floatingToolbarDesc: '.הצג סרגל כלים צף עם פריטים מוצמדים בעת בחירת טקסט',

  readAloud: 'הקראה בקול',
  screenshot: 'צילום מסך',

  addCustomPrompt: 'הוספת פרומפט AI מותאם אישית',
  addCustomPromptDesc: 'הגדירו תבנית פרומפט עם %s עבור הטקסט המסומן, ובחרו AI.',
  promptPlaceholder: '(פרומפט (לדוגמה: סכם את זה: %s',
  targetAi: 'AI יעד',
  addPrompt: 'הוספת פרומפט',

  translateRead: 'הקראת תרגום בקול',
  translateReadDesc: '.הצג כפתור לקריאת הטקסט המסומן בקול שפת התרגום',
  affiliateLinks: 'תמיכה דרך קישורי שותפים',
  affiliateLinksDesc: '.חלק מקישורי החיפוש כוללים תגי שותפים שעוזרים לתמוך ב-Sidekick ללא עלות עבורך',
  affiliateBanner: '.חלק מקישורי החיפוש כוללים תגי שותפים שעוזרים לתמוך ב-Sidekick ללא עלות נוספת. ניתן לבטל זאת למטה',

  // Rate & Share
  enjoyingSidekick: '?נהנים מ-Sidekick',
  rateSidekick: 'דירוג',
  shareSidekick: 'שיתוף',
};

export const TRANSLATIONS: Record<string, UiStrings> = {
  en,
  es,
  fr,
  de,
  ru,
  ja,
  ko,
  'zh-CN': zhCN,
  ar,
  pt,
  uk,
  tr,
  he,
};

export const UI_LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
  { code: 'uk', name: 'Українська' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'zh-CN', name: '中文（简体）' },
  { code: 'ar', name: 'العربية' },
  { code: 'he', name: 'עברית' },
  { code: 'tr', name: 'Türkçe' },
];

export function t(lang: string): UiStrings {
  return TRANSLATIONS[lang] ?? TRANSLATIONS['en'];
}

export function getCategoryLabel(lang: string, category: string): string {
  const strings = t(lang);
  const map: Record<string, string> = {
    search: strings.catSearch,
    translate: strings.catTranslate,
    quickjump: strings.catQuickJump,
    ai: strings.catAiSearch,
    custom: strings.catCustom,
  };
  return map[category] ?? category;
}
