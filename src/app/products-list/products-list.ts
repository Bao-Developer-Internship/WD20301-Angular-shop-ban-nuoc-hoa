import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductItem, Product } from '../product-item/product-item';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-list',
  imports: [ProductItem, FormsModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit {
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);

  allProducts: Product[] = [];
  searchQuery = signal('');
  sortBy = signal('newest');
  selectedCategories = signal<string[]>([]);
  selectedPriceRanges = signal<string[]>([]);

  filtered = computed(() => {
    let list = [...this.allProducts];
    const q = this.searchQuery().toLowerCase();

    // Filter by search
    if (q) list = list.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));

    // Filter by category
    if (this.selectedCategories().length > 0)
      list = list.filter(p => this.selectedCategories().includes(p.category || ''));

    // Filter by price
    if (this.selectedPriceRanges().length > 0) {
      list = list.filter(p => this.selectedPriceRanges().some(range => {
        if (range === 'under1m') return p.price < 1000000;
        if (range === '1m-3m') return p.price >= 1000000 && p.price <= 3000000;
        if (range === 'over3m') return p.price > 3000000;
        return true;
      }));
    }

    // Sort
    switch (this.sortBy()) {
      case 'price-asc': list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'popular': list.sort((a, b) => b.sold - a.sold); break;
      case 'rating': list.sort((a, b) => b.rating - a.rating); break;
      default: break; // newest = default order
    }
    return list;
  });

  ngOnInit() {
    this.productService.getAll().subscribe(products => {
      this.allProducts = products;
      this.route.queryParams.subscribe(params => {
        if (params['q']) this.searchQuery.set(params['q']);
      });
    });
  }

  toggleCategory(cat: string) {
    this.selectedCategories.update(list =>
      list.includes(cat) ? list.filter(c => c !== cat) : [...list, cat]
    );
  }

  togglePrice(range: string) {
    this.selectedPriceRanges.update(list =>
      list.includes(range) ? list.filter(r => r !== range) : [...list, range]
    );
  }

  isCatSelected(cat: string) { return this.selectedCategories().includes(cat); }
  isPriceSelected(range: string) { return this.selectedPriceRanges().includes(range); }

  clearFilters() {
    this.selectedCategories.set([]);
    this.selectedPriceRanges.set([]);
    this.searchQuery.set('');
    this.sortBy.set('newest');
  }

  onSearch(value: string) { this.searchQuery.set(value); }

  get hasFilters() {
    return this.selectedCategories().length > 0 || this.selectedPriceRanges().length > 0 || this.searchQuery();
  }
}
