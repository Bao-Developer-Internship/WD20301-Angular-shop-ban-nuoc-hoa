import { Injectable, signal, computed } from '@angular/core';
import { Product } from './product-item/product-item';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private _items = signal<CartItem[]>([]);

  items = this._items.asReadonly();
  count = computed(() => this._items().reduce((s, i) => s + i.quantity, 0));
  subtotal = computed(() => this._items().reduce((s, i) => s + i.product.price * i.quantity, 0));

  add(product: Product, qty = 1) {
    this._items.update(items => {
      const existing = items.find(i => i.product.id === product.id);
      if (existing) {
        return items.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i);
      }
      return [...items, { product, quantity: qty }];
    });
  }

  remove(productId: string) {
    this._items.update(items => items.filter(i => i.product.id !== productId));
  }

  updateQty(productId: string, qty: number) {
    if (qty < 1) { this.remove(productId); return; }
    this._items.update(items => items.map(i => i.product.id === productId ? { ...i, quantity: qty } : i));
  }

  clear() { this._items.set([]); }
}
