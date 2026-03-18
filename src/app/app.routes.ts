import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Detail } from './detail/detail';
import { ProductsList } from './products-list/products-list';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: ProductsList },
  { path: 'about', component: About },
  { path: 'Detail', component: Detail },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
