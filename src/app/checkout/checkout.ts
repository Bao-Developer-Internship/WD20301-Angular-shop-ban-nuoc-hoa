import { Component, inject, signal } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  imports: [RouterLink, FormsModule],
  templateUrl: './checkout.html',
})
export class Checkout {
  cartService = inject(CartService);
  router = inject(Router);

  step = signal(1); // 1: địa chỉ, 2: thanh toán, 3: xác nhận
  selectedPayment = signal('card');
  orderPlaced = signal(false);

  shippingFee = 35000;
  get subtotal() { return this.cartService.subtotal(); }
  get total() { return this.subtotal + this.shippingFee; }

  form = {
    name: '', phone: '', email: '',
    address: '', city: '', note: ''
  };

  payments = [
    { id: 'card', label: 'Thẻ tín dụng / Ghi nợ', icon: '💳' },
    { id: 'momo', label: 'Ví MoMo', icon: '📱' },
    { id: 'vnpay', label: 'VNPay / QR Code', icon: '🏦' },
    { id: 'cod', label: 'Thanh toán khi nhận hàng', icon: '💵' },
  ];

  nextStep() { this.step.update(s => Math.min(s + 1, 3)); }
  prevStep() { this.step.update(s => Math.max(s - 1, 1)); }

  placeOrder() {
    this.orderPlaced.set(true);
    this.cartService.clear();
  }
}
