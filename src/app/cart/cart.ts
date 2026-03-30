import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
})
export class Cart {
  cartService = inject(CartService);
  private router = inject(Router);
  shippingFee = 35000;

  get subtotal() { return this.cartService.subtotal(); }
  get total() { return this.subtotal + this.shippingFee; }

  updateQty(productId: string, delta: number) {
    const item = this.cartService.items().find(i => i.product.id === productId);
    if (item) this.cartService.updateQty(productId, item.quantity + delta);
  }

  remove(productId: string) { this.cartService.remove(productId); }

  goToCheckout() {
    alert('Đang chuyển sang trang thanh toán...');
    this.router.navigate(['/checkout']);
  }
}
