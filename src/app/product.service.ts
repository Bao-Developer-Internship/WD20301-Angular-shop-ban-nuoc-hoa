import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product-item/product-item';
import { COLLECTIONS } from './data/products.data';
import { AdminProductService } from './admin/admin-product.service';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private adminService = inject(AdminProductService);

  getAll(): Observable<Product[]> {
    return of(this.adminService.getVisible());
  }

  getBestSellers(limit = 4): Observable<Product[]> {
    return of(this.adminService.getVisible().slice(0, limit));
  }

  getById(id: string): Observable<Product | null> {
    return of(this.adminService.products().find(p => p.id === id) ?? null);
  }

  getCollections(): Observable<any[]> {
    return of(COLLECTIONS);
  }
}
