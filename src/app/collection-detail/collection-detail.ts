import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductItem, Product } from '../product-item/product-item';
import { PRODUCTS, COLLECTIONS } from '../data/products.data';

@Component({
  selector: 'app-collection-detail',
  imports: [ProductItem, RouterLink],
  templateUrl: './collection-detail.html',
})
export class CollectionDetail implements OnInit {
  private route = inject(ActivatedRoute);

  collection = signal<any>(null);
  products = signal<Product[]>([]);
  otherCollections = signal<any[]>([]);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const col = COLLECTIONS.find(c => c.id === id);
    if (col) {
      this.collection.set(col);
      this.products.set(PRODUCTS.filter(p => col.brands.includes(p.brand)));
      this.otherCollections.set(COLLECTIONS.filter(c => c.id !== id));
    }
  }
}
