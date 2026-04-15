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

  step = signal(1);
  selectedPayment = signal('card');
  orderPlaced = signal(false);
  loading = signal(false);
  error = signal('');
  orderId = signal('');

  shippingFee = 35000;
  get subtotal() { return this.cartService.subtotal(); }
  get total() { return this.subtotal + this.shippingFee; }

  form = { name: '', phone: '', email: '', address: '', city: '', note: '' };

  payments = [
    { id: 'card', label: 'Thẻ tín dụng / Ghi nợ', icon: '💳' },
    { id: 'momo', label: 'Ví MoMo', icon: '📱' },
    { id: 'vnpay', label: 'VNPay / QR Code', icon: '🏦' },
    { id: 'cod', label: 'Thanh toán khi nhận hàng', icon: '💵' },
  ];

  nextStep() {
    this.error.set('');
    if (this.step() === 1) {
      if (!this.form.name || !this.form.phone || !this.form.address || !this.form.city) {
        this.error.set('Vui lòng điền đầy đủ thông tin bắt buộc (*)');
        return;
      }
      if (!/^0\d{9}$/.test(this.form.phone)) {
        this.error.set('Số điện thoại không hợp lệ');
        return;
      }
    }
    this.step.update(s => Math.min(s + 1, 3));
  }

  prevStep() { this.step.update(s => Math.max(s - 1, 1)); this.error.set(''); }

  async placeOrder() {
    this.loading.set(true);
    this.error.set('');
    try {
      // Lưu đơn hàng vào json-server
      const order = {
        id: `LS-${Date.now()}`,
        customer: this.form.name,
        email: this.form.email,
        phone: this.form.phone,
        address: `${this.form.address}, ${this.form.city}`,
        note: this.form.note,
        payment: this.selectedPayment(),
        items: this.cartService.items().map(i => ({
          id: i.product.id, name: i.product.name,
          price: i.product.price, qty: i.quantity
        })),
        total: this.total,
        status: 'Chờ xử lý',
        date: new Date().toLocaleDateString('vi-VN'),
        createdAt: new Date().toISOString(),
      };

      // Thử gọi json-server, nếu lỗi thì vẫn tiếp tục
      try {
        await fetch('http://localhost:3000/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(order),
        });
      } catch { /* backend offline — vẫn cho đặt hàng */ }

      this.orderId.set(order.id);
      this.cartService.clear();
      this.orderPlaced.set(true);
    } catch (e) {
      this.error.set('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      this.loading.set(false);
    }
  }
}
