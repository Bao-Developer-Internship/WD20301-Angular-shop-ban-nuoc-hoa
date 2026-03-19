import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Product {
  brand: string;
  name: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  img: string;
}

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  @Input() product!: Product;
  @Input() variant: 'square' | 'portrait' = 'square';
}
