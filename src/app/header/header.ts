import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
import { FavoriteService } from '../favorite.service';
import { AuthService } from '../auth.service';
import { Search } from '../search/search';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Search],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  cart = inject(CartService);
  favorite = inject(FavoriteService);
  auth = inject(AuthService);

  logout() { this.auth.logout(); }
}
