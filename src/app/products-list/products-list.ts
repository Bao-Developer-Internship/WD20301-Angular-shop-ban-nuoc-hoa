import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductItem, Product } from '../product-item/product-item';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-list',
  imports: [ProductItem],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit {
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);

  allProducts: Product[] = [];
  filtered = signal<Product[]>([]);
  searchQuery = signal('');

  ngOnInit() {
    this.productService.getAll().subscribe(products => {
      this.allProducts = products;
      // Đọc query param ?q= từ URL
      this.route.queryParams.subscribe(params => {
        const q = params['q'] || '';
        this.searchQuery.set(q);
        this.applyFilter(q);
      });
    });
  }

  applyFilter(q: string) {
    if (!q.trim()) {
      this.filtered.set(this.allProducts);
      return;
    }
    const lower = q.toLowerCase();
    this.filtered.set(
      this.allProducts.filter(p =>
        p.name.toLowerCase().includes(lower) ||
        p.brand.toLowerCase().includes(lower)
      )
    );
  }

  onSearch(value: string) {
    this.searchQuery.set(value);
    this.applyFilter(value);
  }
}
