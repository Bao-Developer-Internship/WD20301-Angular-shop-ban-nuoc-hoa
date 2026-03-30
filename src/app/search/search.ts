import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product-item/product-item';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
})
export class Search {
  private router = inject(Router);
  private productService = inject(ProductService);

  query = signal('');
  suggestions = signal<Product[]>([]);
  showDropdown = signal(false);
  allProducts: Product[] = [];

  constructor() {
    this.productService.getAll().subscribe(p => this.allProducts = p);
  }

  onInput(value: string) {
    this.query.set(value);
    if (value.trim().length < 1) {
      this.suggestions.set([]);
      this.showDropdown.set(false);
      return;
    }
    const q = value.toLowerCase();
    const results = this.allProducts.filter(p =>
      p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
    ).slice(0, 6);
    this.suggestions.set(results);
    this.showDropdown.set(results.length > 0);
  }

  selectProduct(product: Product) {
    this.query.set(product.name);
    this.showDropdown.set(false);
    this.router.navigate(['/product', product.id]);
  }

  onSubmit() {
    if (!this.query().trim()) return;
    this.showDropdown.set(false);
    this.router.navigate(['/products'], { queryParams: { q: this.query() } });
  }

  onBlur() {
    setTimeout(() => this.showDropdown.set(false), 150);
  }

  highlight(text: string): string {
    const q = this.query().trim();
    if (!q) return text;
    const regex = new RegExp(`(${q})`, 'gi');
    return text.replace(regex, '<mark class="bg-accent/30 text-primary rounded px-0.5">$1</mark>');
  }
}
