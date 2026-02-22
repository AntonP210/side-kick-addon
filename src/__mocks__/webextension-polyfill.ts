import { vi } from 'vitest';

const syncStorage: Record<string, unknown> = {};
const localStorage: Record<string, unknown> = {};
const changeListeners: Array<(changes: Record<string, { oldValue?: unknown; newValue?: unknown }>) => void> = [];

function makeStorageArea(store: Record<string, unknown>) {
  return {
    get: vi.fn(async (key: string) => {
      return key in store ? { [key]: store[key] } : {};
    }),
    set: vi.fn(async (items: Record<string, unknown>) => {
      for (const [key, value] of Object.entries(items)) {
        const oldValue = store[key];
        store[key] = value;
        changeListeners.forEach((cb) =>
          cb({ [key]: { oldValue, newValue: value } }),
        );
      }
    }),
    remove: vi.fn(async (key: string) => {
      delete store[key];
    }),
  };
}

const browser = {
  storage: {
    sync: makeStorageArea(syncStorage),
    local: makeStorageArea(localStorage),
    onChanged: {
      addListener: vi.fn((cb: (changes: Record<string, { oldValue?: unknown; newValue?: unknown }>) => void) => {
        changeListeners.push(cb);
      }),
      removeListener: vi.fn((cb: (changes: Record<string, { oldValue?: unknown; newValue?: unknown }>) => void) => {
        const index = changeListeners.indexOf(cb);
        if (index >= 0) changeListeners.splice(index, 1);
      }),
    },
  },
  contextMenus: {
    create: vi.fn(),
    removeAll: vi.fn(async () => {}),
    onClicked: {
      addListener: vi.fn(),
    },
  },
  tabs: {
    create: vi.fn(async () => {}),
    captureVisibleTab: vi.fn(async () => 'data:image/png;base64,fake'),
  },
  runtime: {
    openOptionsPage: vi.fn(),
    onInstalled: { addListener: vi.fn() },
    onStartup: { addListener: vi.fn() },
    onMessage: { addListener: vi.fn() },
    sendMessage: vi.fn(async () => ({})),
  },
  _reset() {
    for (const key of Object.keys(syncStorage)) delete syncStorage[key];
    for (const key of Object.keys(localStorage)) delete localStorage[key];
    changeListeners.length = 0;
    vi.clearAllMocks();
  },
};

export default browser;
