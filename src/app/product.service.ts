import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product-item/product-item';
import { PRODUCTS, COLLECTIONS } from './data/products.data';

@Injectable({ providedIn: 'root' })
export class ProductService {

  getAll(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getBestSellers(limit = 4): Observable<Product[]> {
    return of(PRODUCTS.slice(0, limit));
  }

  getById(id: string): Observable<Product | null> {
    return of(PRODUCTS.find(p => p.id === id) ?? null);
  }

  getCollections(): Observable<any[]> {
    return of(COLLECTIONS);
  }
}
