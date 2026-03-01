export const TOOLBAR_CSS = `
:host {
  all: initial;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.sk-toolbar {
  position: fixed;
  z-index: 2147483647;
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.15s, transform 0.15s;
  pointer-events: none;
}

.sk-toolbar.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.sk-toolbar.above {
  transform: translateY(-4px);
}

.sk-toolbar.above.visible {
  transform: translateY(0);
}

/* Light theme (default) */
.sk-toolbar {
  background: #fff;
  border: 1px solid #e0e0e0;
}

.sk-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
  padding: 0;
  transition: background 0.12s;
  position: relative;
}

.sk-btn:hover {
  background: #f0f0f0;
}

.sk-btn:active {
  background: #e0e0e0;
}

.sk-btn[data-tooltip]::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: calc(100% + 4px);
  left: 50%;
  transform: translateX(-50%);
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 11px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s;
  background: #333;
  color: #fff;
}

.sk-btn:hover[data-tooltip]::after {
  opacity: 1;
}

.sk-btn-close {
  font-size: 13px;
  width: 24px;
  height: 24px;
  color: #e74c3c;
  opacity: 0.7;
}

.sk-btn-close:hover {
  opacity: 1;
  background: rgba(231, 76, 60, 0.15);
}

.sk-divider {
  width: 1px;
  height: 20px;
  background: #e0e0e0;
  margin: 0 2px;
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
  .sk-toolbar {
    background: #2a2a3e;
    border-color: #3a3a5c;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
  }

  .sk-btn:hover {
    background: #3a3a5c;
  }

  .sk-btn:active {
    background: #4a4a6c;
  }

  .sk-btn[title]::after {
    background: #555;
  }

  .sk-divider {
    background: #3a3a5c;
  }
}
`;
