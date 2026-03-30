import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
import { FavoriteService } from '../favorite.service';

export interface Product {
  id: string;
  brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  img: string;
  images?: string[];
  description?: string;
  notes?: { top: string; heart: string; base: string };
  longevity: number;
  sillage: number;
  rating: number;
  reviews: number;
  sold: number;
  category?: string;
}

@Component({
  selector: 'app-product-item',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  @Input() product!: Product;
  @Input() variant: 'square' | 'portrait' = 'square';

  cart = inject(CartService);
  favorite = inject(FavoriteService);

  addToCart(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.cart.add(this.product);
  }

  toggleFavorite(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.favorite.toggle(this.product);
  }

  get isFav() { return this.favorite.isFavorite(this.product.id); }
}
