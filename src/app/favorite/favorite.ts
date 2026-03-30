import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoriteService } from '../favorite.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-favorite',
  imports: [RouterLink],
  templateUrl: './favorite.html',
})
export class Favorite {
  favoriteService = inject(FavoriteService);
  cartService = inject(CartService);

  addToCart(productId: string) {
    const product = this.favoriteService.items().find(p => p.id === productId);
    if (product) this.cartService.add(product);
  }

  remove(productId: string) { this.favoriteService.remove(productId); }
}
