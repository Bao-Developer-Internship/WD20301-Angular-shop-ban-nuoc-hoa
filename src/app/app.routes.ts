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
import { Checkout } from './checkout/checkout';
import { AdminDashboard } from './admin/dashboard/dashboard';
import { AdminProducts } from './admin/products/admin-products';
import { AdminOrders } from './admin/orders/admin-orders';
import { AdminSettings } from './admin/settings/admin-settings';
import { AdminCustomers } from './admin/customers/admin-customers';
import { Contact } from './contact/contact';
import { Profile } from './profile/profile';
import { CollectionDetail } from './collection-detail/collection-detail';
import { AdminGallery } from './admin/gallery/admin-gallery';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: ProductsList },
  { path: 'about', component: About },
  { path: 'product/:id', component: ProductDetail },
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Checkout },
  { path: 'login', component: Login },
  { path: 'profile', component: Profile },
  { path: 'contact', component: Contact },
  { path: 'collections', component: Collections },
  { path: 'collections/:id', component: CollectionDetail },
  { path: 'favorite', component: Favorite },
  { path: 'wholesale', component: Wholesale },
  { path: 'admin/dashboard', component: AdminDashboard },
  { path: 'admin/products', component: AdminProducts },
  { path: 'admin/orders', component: AdminOrders },
  { path: 'admin/customers', component: AdminCustomers },
  { path: 'admin/settings', component: AdminSettings },
  { path: 'admin/gallery', component: AdminGallery },
  { path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
