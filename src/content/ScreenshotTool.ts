import browser from 'webextension-polyfill';

export class ScreenshotTool {
  private overlay: HTMLElement | null = null;
  private canvas: HTMLCanvasElement | null = null;
  private startX = 0;
  private startY = 0;
  private selecting = false;

  start() {
    if (this.overlay) return;

    this.overlay = document.createElement('div');
    Object.assign(this.overlay.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      zIndex: '2147483646',
      cursor: 'crosshair',
      background: 'rgba(0, 0, 0, 0.2)',
    });

    const selectionBox = document.createElement('div');
    selectionBox.id = 'sk-selection';
    Object.assign(selectionBox.style, {
      position: 'absolute',
      border: '2px dashed #4361ee',
      background: 'rgba(67, 97, 238, 0.1)',
      display: 'none',
    });
    this.overlay.appendChild(selectionBox);

    this.overlay.addEventListener('mousedown', (e) => {
      this.startX = e.clientX;
      this.startY = e.clientY;
      this.selecting = true;
      selectionBox.style.display = 'block';
      selectionBox.style.left = `${e.clientX}px`;
      selectionBox.style.top = `${e.clientY}px`;
      selectionBox.style.width = '0';
      selectionBox.style.height = '0';
    });

    this.overlay.addEventListener('mousemove', (e) => {
      if (!this.selecting) return;
      const x = Math.min(e.clientX, this.startX);
      const y = Math.min(e.clientY, this.startY);
      const w = Math.abs(e.clientX - this.startX);
      const h = Math.abs(e.clientY - this.startY);
      selectionBox.style.left = `${x}px`;
      selectionBox.style.top = `${y}px`;
      selectionBox.style.width = `${w}px`;
      selectionBox.style.height = `${h}px`;
    });

    this.overlay.addEventListener('mouseup', async (e) => {
      if (!this.selecting) return;
      this.selecting = false;

      const x = Math.min(e.clientX, this.startX);
      const y = Math.min(e.clientY, this.startY);
      const w = Math.abs(e.clientX - this.startX);
      const h = Math.abs(e.clientY - this.startY);

      if (w < 5 || h < 5) {
        this.cleanup();
        return;
      }

      // Remove overlay before capture so it's not in the screenshot
      this.overlay!.style.display = 'none';

      // Small delay to ensure overlay is hidden
      await new Promise((r) => setTimeout(r, 50));

      try {
        const response = await browser.runtime.sendMessage({ type: 'CAPTURE_TAB' }) as Record<string, unknown>;
        const dataUrl = response.dataUrl as string;
        await this.cropAndShow(dataUrl, x, y, w, h);
      } catch {
        this.cleanup();
      }
    });

    this.overlay.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.cleanup();
    });

    document.body.appendChild(this.overlay);
    this.overlay.focus();

    // Also listen for Escape on document
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        document.removeEventListener('keydown', escHandler);
        this.cleanup();
      }
    };
    document.addEventListener('keydown', escHandler);
  }

  private async cropAndShow(dataUrl: string, x: number, y: number, w: number, h: number) {
    const dpr = window.devicePixelRatio || 1;
    const img = new Image();
    img.src = dataUrl;
    await new Promise((resolve) => { img.onload = resolve; });

    this.canvas = document.createElement('canvas');
    this.canvas.width = w * dpr;
    this.canvas.height = h * dpr;
    const ctx = this.canvas.getContext('2d')!;
    ctx.drawImage(img, x * dpr, y * dpr, w * dpr, h * dpr, 0, 0, w * dpr, h * dpr);

    this.showResultToolbar();
  }

  private showResultToolbar() {
    this.cleanup();

    const container = document.createElement('div');
    Object.assign(container.style, {
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: '2147483647',
      display: 'flex',
      gap: '8px',
      padding: '8px 12px',
      background: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    });

    const darkMq = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkMq.matches) {
      container.style.background = '#2a2a3e';
      container.style.color = '#e0e0e0';
    }

    const btnStyle = {
      padding: '6px 14px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '13px',
      fontWeight: '500',
    };

    const copyBtn = document.createElement('button');
    copyBtn.textContent = '📋 Copy';
    Object.assign(copyBtn.style, btnStyle, {
      background: '#4361ee',
      color: '#fff',
    });
    copyBtn.addEventListener('click', async () => {
      if (!this.canvas) return;
      try {
        const blob = await new Promise<Blob>((resolve) =>
          this.canvas!.toBlob((b) => resolve(b!), 'image/png'),
        );
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob }),
        ]);
      } catch { /* clipboard may not be available */ }
      container.remove();
    });

    const saveBtn = document.createElement('button');
    saveBtn.textContent = '💾 Save';
    Object.assign(saveBtn.style, btnStyle, {
      background: darkMq.matches ? '#3a3a5c' : '#f0f0f0',
      color: darkMq.matches ? '#e0e0e0' : '#333',
    });
    saveBtn.addEventListener('click', () => {
      if (!this.canvas) return;
      const a = document.createElement('a');
      a.href = this.canvas.toDataURL('image/png');
      a.download = `screenshot-${Date.now()}.png`;
      a.click();
      container.remove();
    });

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    Object.assign(closeBtn.style, btnStyle, {
      background: 'transparent',
      color: darkMq.matches ? '#aaa' : '#888',
      fontSize: '16px',
      padding: '6px 8px',
    });
    closeBtn.addEventListener('click', () => container.remove());

    container.appendChild(copyBtn);
    container.appendChild(saveBtn);
    container.appendChild(closeBtn);
    document.body.appendChild(container);
  }

  private cleanup() {
    if (this.overlay) {
      this.overlay.remove();
      this.overlay = null;
    }
  }
}
