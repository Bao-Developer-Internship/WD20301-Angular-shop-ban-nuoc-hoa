import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface CartItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  img: string;
}

@Component({
  selector: 'app-cart',
  imports: [RouterLink, FormsModule],
  templateUrl: './cart.html',
})
export class Cart {
  currentStep = signal(1);
  selectedPayment = signal('card');
  couponCode = '';
  shippingFee = 35000;

  items: CartItem[] = [
    { id: '1', name: 'Imperial Lotus Extrait', brand: 'LUXE SCENT', price: 2450000, quantity: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiFu1XaVq-BfotVaGW61hyNQ4aKvHAd4brGaY1pLih3Krx27Lj2xt62BbZWE1G7sTlUWGb8CEHUDMxgeR0s7ONTYUPzfLt9Ac2CWIBKx7Ere0axsxyjT2imbEHyZM82kW91DdV4l3tc2KJWy7OA34r8-e0lCDbuKLPXPWWhQCJT27wuLhbY2Hz9UOFQ2gdCQIRqThRi9Gry0HgQQ0UeFUI4S94gocwkZioZjMBoZspBM0n8yq7wMd4wv9Tv4qeC7puRBZaSBKzpg0' },
    { id: '2', name: 'Golden Amber Oud', brand: 'LUXE SCENT', price: 3200000, quantity: 2, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABPOa9hmKgrGelP-3FdRJzcvrwAGTIueXlgyvIuyLNSAjjK3bsYowf98eg7qh4DKsVm4GR-Y3_-qKrbU1cZF4gAYAhicqXbFFJE1nYKHTNJZljRlHyUd2LICANjTMzd-OW16FeLJdJEW0XaSh9spCTLFF8RNQIDrT0G1iwccDH9kTt8pCgFdeofkYNzHTMijAZd2aJdHGED1HPfcTgWDFiBLWM23psdooo8q8M-mXQlClmDZYyzeEkFV81LR_Ft8VK0MIWuejcK1M' },
  ];

  get subtotal() { return this.items.reduce((s, i) => s + i.price * i.quantity, 0); }
  get total() { return this.subtotal + this.shippingFee; }

  updateQty(item: CartItem, delta: number) {
    item.quantity = Math.max(1, item.quantity + delta);
  }

  remove(id: string) {
    this.items = this.items.filter(i => i.id !== id);
  }

  steps = [
    { n: 1, label: 'Giỏ hàng', icon: 'shopping_cart' },
    { n: 2, label: 'Địa chỉ', icon: 'location_on' },
    { n: 3, label: 'Vận chuyển', icon: 'local_shipping' },
    { n: 4, label: 'Thanh toán', icon: 'payment' },
  ];

  payments = [
    { id: 'momo', label: 'Ví MoMo', color: '#A50064' },
    { id: 'vnpay', label: 'VNPay / QR', color: '#005baa' },
    { id: 'card', label: 'Thẻ tín dụng', color: '#1a1a1a' },
  ];
}
