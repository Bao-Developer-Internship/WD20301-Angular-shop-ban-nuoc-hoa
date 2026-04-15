import { Injectable, signal } from '@angular/core';
import { Product } from '../product-item/product-item';
import { PRODUCTS } from '../data/products.data';

const STORAGE_KEY = 'luxe_admin_products';

@Injectable({ providedIn: 'root' })
export class AdminProductService {
  private _products = signal<Product[]>(this.load());

  products = this._products.asReadonly();

  private load(): Product[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: Product[] = JSON.parse(stored);
        // Migration: nếu ảnh không dùng /assets/ thì reset về default
        const needsMigration = parsed.some(p => !p.img.startsWith('/assets/'));
        if (needsMigration) {
          localStorage.removeItem(STORAGE_KEY);
          return PRODUCTS;
        }
        return parsed;
      }
      return PRODUCTS;
    } catch { return PRODUCTS; }
  }

  private save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this._products()));
  }

  add(product: Omit<Product, 'id'>) {
    const newProduct: Product = {
      ...product,
      id: Date.now().toString(),
      rating: product.rating || 0,
      reviews: product.reviews || 0,
      sold: product.sold || 0,
      longevity: product.longevity || 3,
      sillage: product.sillage || 3,
    };
    this._products.update(list => [...list, newProduct]);
    this.save();
    return newProduct;
  }

  update(id: string, data: Partial<Product>) {
    this._products.update(list => list.map(p => p.id === id ? { ...p, ...data } : p));
    this.save();
  }

  delete(id: string) {
    this._products.update(list => list.filter(p => p.id !== id));
    this.save();
  }

  toggleHidden(id: string) {
    this._products.update(list => list.map(p =>
      p.id === id ? { ...p, status: p.status === 'hidden' ? 'active' : 'hidden' } : p
    ));
    this.save();
  }

  getVisible(): Product[] {
    return this._products().filter(p => p.status !== 'hidden');
  }
}
