import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const DEFAULT_IMAGES = [
  '/assets/images/San-Pham/SP2.jpg',
  '/assets/images/San-Pham/SP3.jpg',
  '/assets/images/San-Pham/SP4.jpg',
  '/assets/images/San-Pham/Sp5.jpg',
  '/assets/images/San-Pham/SP6.jpg',
  '/assets/images/San-Pham/SP7.jpg',
];

const STORAGE_KEY = 'luxe_gallery_images';

@Injectable({ providedIn: 'root' })
export class GalleryService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private _images = signal<string[]>(this.load());

  images = this._images.asReadonly();

  private load(): string[] {
    if (!this.isBrowser) return DEFAULT_IMAGES;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : DEFAULT_IMAGES;
    } catch { return DEFAULT_IMAGES; }
  }

  updateImages(images: string[]) {
    this._images.set(images);
    if (this.isBrowser) localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
  }

  addImage(url: string) {
    this.updateImages([...this._images(), url]);
  }

  removeImage(index: number) {
    this.updateImages(this._images().filter((_, i) => i !== index));
  }

  reset() { this.updateImages(DEFAULT_IMAGES); }
}
