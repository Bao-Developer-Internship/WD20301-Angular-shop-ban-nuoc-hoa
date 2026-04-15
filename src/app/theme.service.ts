import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface ThemeColors {
  primary: string;
  accent: string;
  background: string;
}

const DEFAULTS: ThemeColors = {
  primary: '#0a3d2b',
  accent: '#c5a059',
  background: '#f8f4f0',
};

const STORAGE_KEY = 'luxe_theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  colors = signal<ThemeColors>(this.load());

  private load(): ThemeColors {
    if (!this.isBrowser) return DEFAULTS;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? { ...DEFAULTS, ...JSON.parse(stored) } : DEFAULTS;
    } catch { return DEFAULTS; }
  }

  apply(colors: ThemeColors) {
    this.colors.set(colors);
    if (this.isBrowser) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(colors));
      this.applyToDOM(colors);
    }
  }

  applyToDOM(colors: ThemeColors = this.colors()) {
    if (!this.isBrowser) return;
    const root = document.documentElement;
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-background', colors.background);
  }

  reset() { this.apply(DEFAULTS); }
}
