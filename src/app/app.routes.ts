import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProductsList } from './products-list/products-list';
import { About } from './about/about';
import { ProductDetail } from './product-detail/product-detail';
import { Cart } from './cart/cart';
import { Login } from './login/login';
import { Collections } from './collections/collections';
import { Favorite } from './favorite/favorite';
import { Wholesale } from './wholesale/wholesale';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: ProductsList },
  { path: 'about', component: About },
  { path: 'product/:id', component: ProductDetail },
  { path: 'cart', component: Cart },
  { path: 'login', component: Login },
  { path: 'collections', component: Collections },
  { path: 'favorite', component: Favorite },
  { path: 'wholesale', component: Wholesale },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
