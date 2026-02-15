import { vi } from 'vitest';

const storage: Record<string, unknown> = {};
const changeListeners: Array<(changes: Record<string, { oldValue?: unknown; newValue?: unknown }>) => void> = [];

const browser = {
  storage: {
    sync: {
      get: vi.fn(async (key: string) => {
        return key in storage ? { [key]: storage[key] } : {};
      }),
      set: vi.fn(async (items: Record<string, unknown>) => {
        for (const [key, value] of Object.entries(items)) {
          const oldValue = storage[key];
          storage[key] = value;
          changeListeners.forEach((cb) =>
            cb({ [key]: { oldValue, newValue: value } }),
          );
        }
      }),
    },
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
  },
  runtime: {
    openOptionsPage: vi.fn(),
    onInstalled: { addListener: vi.fn() },
    onStartup: { addListener: vi.fn() },
  },
  _reset() {
    for (const key of Object.keys(storage)) delete storage[key];
    changeListeners.length = 0;
    vi.clearAllMocks();
  },
};

export default browser;
