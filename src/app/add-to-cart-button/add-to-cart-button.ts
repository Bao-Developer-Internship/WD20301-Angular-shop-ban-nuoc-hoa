import { Component, Input, inject, signal } from '@angular/core';
import { CartService } from '../cart.service';
import { FavoriteService } from '../favorite.service';
import { Product } from '../product-item/product-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-to-cart-button',
  imports: [RouterLink],
  templateUrl: './add-to-cart-button.html',
})
export class AddToCartButton {
  @Input() product!: Product;
  @Input() quantity = 1;
  @Input() showFavorite = true;

  cartService = inject(CartService);
  favoriteService = inject(FavoriteService);
  added = signal(false);

  addToCart() {
    this.cartService.add(this.product, this.quantity);
    this.added.set(true);
    setTimeout(() => this.added.set(false), 2000);
  }

  toggleFavorite() {
    this.favoriteService.toggle(this.product);
  }

  get isFav() { return this.favoriteService.isFavorite(this.product.id); }
  get cartCount() { return this.cartService.count(); }
}
