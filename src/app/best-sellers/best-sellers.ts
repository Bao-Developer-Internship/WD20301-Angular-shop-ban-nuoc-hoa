import { Component, inject } from '@angular/core';
import { ProductItem, Product } from '../product-item/product-item';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-best-sellers',
  imports: [ProductItem],
  templateUrl: './best-sellers.html',
})
export class BestSellers {
  private productService = inject(ProductService);
  products: Product[] = this.productService.getBestSellers(4);
}
