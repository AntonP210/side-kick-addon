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
  addSite: string;

  backupRestore: string;
  exportSettings: string;
  importSettings: string;
  resetToDefaults: string;
  resetConfirm: string;
  invalidFile: string;

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
  addSite: 'Add Site',

  backupRestore: 'Backup & Restore',
  exportSettings: 'Export Settings',
  importSettings: 'Import Settings',
  resetToDefaults: 'Reset to Defaults',
  resetConfirm: 'Reset all settings to defaults? This cannot be undone.',
  invalidFile: 'Invalid settings file.',

  catSearch: 'Search',
  catTranslate: 'Translate',
  catQuickJump: 'Quick Jump',
  catAiSearch: 'AI Search',
  catCustom: 'Custom',
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
  addSite: 'Añadir sitio',

  backupRestore: 'Copia de seguridad',
  exportSettings: 'Exportar configuración',
  importSettings: 'Importar configuración',
  resetToDefaults: 'Restablecer valores',
  resetConfirm: '¿Restablecer toda la configuración? No se puede deshacer.',
  invalidFile: 'Archivo de configuración no válido.',

  catSearch: 'Búsqueda',
  catTranslate: 'Traducción',
  catQuickJump: 'Acceso rápido',
  catAiSearch: 'Búsqueda IA',
  catCustom: 'Personalizado',
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
  addSite: 'Ajouter le site',

  backupRestore: 'Sauvegarde et restauration',
  exportSettings: 'Exporter les paramètres',
  importSettings: 'Importer les paramètres',
  resetToDefaults: 'Réinitialiser',
  resetConfirm: 'Réinitialiser tous les paramètres ? Cette action est irréversible.',
  invalidFile: 'Fichier de paramètres invalide.',

  catSearch: 'Recherche',
  catTranslate: 'Traduction',
  catQuickJump: 'Accès rapide',
  catAiSearch: 'Recherche IA',
  catCustom: 'Personnalisé',
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
  addSite: 'Seite hinzufügen',

  backupRestore: 'Sichern & Wiederherstellen',
  exportSettings: 'Einstellungen exportieren',
  importSettings: 'Einstellungen importieren',
  resetToDefaults: 'Zurücksetzen',
  resetConfirm: 'Alle Einstellungen zurücksetzen? Dies kann nicht rückgängig gemacht werden.',
  invalidFile: 'Ungültige Einstellungsdatei.',

  catSearch: 'Suche',
  catTranslate: 'Übersetzen',
  catQuickJump: 'Schnellzugriff',
  catAiSearch: 'KI-Suche',
  catCustom: 'Benutzerdefiniert',
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
  addSite: 'Добавить сайт',

  backupRestore: 'Резервное копирование',
  exportSettings: 'Экспорт настроек',
  importSettings: 'Импорт настроек',
  resetToDefaults: 'Сбросить настройки',
  resetConfirm: 'Сбросить все настройки? Это действие нельзя отменить.',
  invalidFile: 'Недопустимый файл настроек.',

  catSearch: 'Поиск',
  catTranslate: 'Перевод',
  catQuickJump: 'Быстрый переход',
  catAiSearch: 'ИИ-поиск',
  catCustom: 'Пользовательские',
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
  addSite: 'サイトを追加',

  backupRestore: 'バックアップと復元',
  exportSettings: '設定をエクスポート',
  importSettings: '設定をインポート',
  resetToDefaults: '初期設定に戻す',
  resetConfirm: 'すべての設定を初期値に戻しますか？この操作は元に戻せません。',
  invalidFile: '無効な設定ファイルです。',

  catSearch: '検索',
  catTranslate: '翻訳',
  catQuickJump: 'クイックジャンプ',
  catAiSearch: 'AI検索',
  catCustom: 'カスタム',
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
  addSite: '添加网站',

  backupRestore: '备份与恢复',
  exportSettings: '导出设置',
  importSettings: '导入设置',
  resetToDefaults: '恢复默认',
  resetConfirm: '恢复所有默认设置？此操作无法撤销。',
  invalidFile: '无效的设置文件。',

  catSearch: '搜索',
  catTranslate: '翻译',
  catQuickJump: '快捷跳转',
  catAiSearch: 'AI搜索',
  catCustom: '自定义',
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
  addSite: '사이트 추가',

  backupRestore: '백업 및 복원',
  exportSettings: '설정 내보내기',
  importSettings: '설정 가져오기',
  resetToDefaults: '기본값으로 초기화',
  resetConfirm: '모든 설정을 초기화하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
  invalidFile: '잘못된 설정 파일입니다.',

  catSearch: '검색',
  catTranslate: '번역',
  catQuickJump: '빠른 이동',
  catAiSearch: 'AI 검색',
  catCustom: '사용자 정의',
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
  addSite: 'إضافة موقع',

  backupRestore: 'النسخ الاحتياطي والاستعادة',
  exportSettings: 'تصدير الإعدادات',
  importSettings: 'استيراد الإعدادات',
  resetToDefaults: 'إعادة التعيين',
  resetConfirm: 'إعادة تعيين جميع الإعدادات؟ لا يمكن التراجع عن هذا.',
  invalidFile: 'ملف إعدادات غير صالح.',

  catSearch: 'بحث',
  catTranslate: 'ترجمة',
  catQuickJump: 'وصول سريع',
  catAiSearch: 'بحث بالذكاء الاصطناعي',
  catCustom: 'مخصص',
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
  addSite: 'Adicionar site',

  backupRestore: 'Backup e restauração',
  exportSettings: 'Exportar configurações',
  importSettings: 'Importar configurações',
  resetToDefaults: 'Restaurar padrões',
  resetConfirm: 'Restaurar todas as configurações? Isso não pode ser desfeito.',
  invalidFile: 'Arquivo de configurações inválido.',

  catSearch: 'Pesquisa',
  catTranslate: 'Tradução',
  catQuickJump: 'Acesso rápido',
  catAiSearch: 'Pesquisa IA',
  catCustom: 'Personalizado',
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
  addSite: 'Додати сайт',

  backupRestore: 'Резервне копіювання',
  exportSettings: 'Експорт налаштувань',
  importSettings: 'Імпорт налаштувань',
  resetToDefaults: 'Скинути налаштування',
  resetConfirm: 'Скинути всі налаштування? Цю дію не можна скасувати.',
  invalidFile: 'Недійсний файл налаштувань.',

  catSearch: 'Пошук',
  catTranslate: 'Переклад',
  catQuickJump: 'Швидкий перехід',
  catAiSearch: 'ШІ-пошук',
  catCustom: 'Користувацькі',
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
  addSite: 'Site ekle',

  backupRestore: 'Yedekleme ve geri yükleme',
  exportSettings: 'Ayarları dışa aktar',
  importSettings: 'Ayarları içe aktar',
  resetToDefaults: 'Varsayılanlara sıfırla',
  resetConfirm: 'Tüm ayarlar sıfırlansın mı? Bu işlem geri alınamaz.',
  invalidFile: 'Geçersiz ayar dosyası.',

  catSearch: 'Arama',
  catTranslate: 'Çeviri',
  catQuickJump: 'Hızlı erişim',
  catAiSearch: 'Yapay Zeka Arama',
  catCustom: 'Özel',
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
  addSite: 'הוספת אתר',

  backupRestore: 'גיבוי ושחזור',
  exportSettings: 'ייצוא הגדרות',
  importSettings: 'ייבוא הגדרות',
  resetToDefaults: 'איפוס לברירת מחדל',
  resetConfirm: 'לאפס את כל ההגדרות? לא ניתן לבטל פעולה זו.',
  invalidFile: '.קובץ הגדרות לא תקין',

  catSearch: 'חיפוש',
  catTranslate: 'תרגום',
  catQuickJump: 'גישה מהירה',
  catAiSearch: 'חיפוש AI',
  catCustom: 'מותאם אישית',
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
