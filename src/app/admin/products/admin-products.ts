import { Component, inject } from '@angular/core';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-admin-products',
  imports: [AdminSidebar, RouterLink],
  templateUrl: './admin-products.html',
})
export class AdminProducts {
  productService = inject(ProductService);
  products = this.productService['getAll']();
  items: any[] = [];

  constructor() {
    this.productService.getAll().subscribe(p => this.items = p);
  }
}
