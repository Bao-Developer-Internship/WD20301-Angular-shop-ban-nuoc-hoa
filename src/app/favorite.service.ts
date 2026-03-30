import { Injectable, signal, computed } from '@angular/core';
import { Product } from './product-item/product-item';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private _items = signal<Product[]>([]);

  items = this._items.asReadonly();
  count = computed(() => this._items().length);

  toggle(product: Product) {
    this._items.update(items =>
      items.find(i => i.id === product.id)
        ? items.filter(i => i.id !== product.id)
        : [...items, product]
    );
  }

  isFavorite(productId: string) {
    return this._items().some(i => i.id === productId);
  }

  remove(productId: string) {
    this._items.update(items => items.filter(i => i.id !== productId));
  }
}
