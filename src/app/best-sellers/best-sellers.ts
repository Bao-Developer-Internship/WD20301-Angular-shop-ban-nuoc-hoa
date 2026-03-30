import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ProductItem, Product } from '../product-item/product-item';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-best-sellers',
  imports: [ProductItem, AsyncPipe],
  templateUrl: './best-sellers.html',
})
export class BestSellers {
  private productService = inject(ProductService);
  products$ = this.productService.getBestSellers(4);
}
