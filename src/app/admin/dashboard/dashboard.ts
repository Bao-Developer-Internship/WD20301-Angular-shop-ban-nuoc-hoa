import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';
import { AdminProductService } from '../admin-product.service';

interface Order {
  id: string; customer: string; product?: string; items?: any[];
  price?: string; total?: number; status: string; date: string; email?: string;
}

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterLink, AdminSidebar],
  templateUrl: './dashboard.html',
})
export class AdminDashboard implements OnInit {
  private http = inject(HttpClient);
  private adminProductService = inject(AdminProductService);

  orders = signal<Order[]>([]);
  loading = signal(true);

  stats = computed(() => {
    const list = this.orders();
    // Chỉ tính đơn hoàn thành
    const completedOrders = list.filter(o => o.status === 'Hoàn thành');
    const revenue = completedOrders.reduce((s, o) => s + (o.total || 0), 0);
    // Tổng sản phẩm bán ra từ đơn hoàn thành
    const soldQty = completedOrders.reduce((s, o) => {
      const qty = (o.items || []).reduce((q: number, i: any) => q + (i.qty || 1), 0);
      return s + qty;
    }, 0);
    return {
      revenue: revenue.toLocaleString('vi-VN') + '₫',
      totalOrders: list.length,
      soldQty,
      products: this.adminProductService.products().filter(p => p.status !== 'hidden').length,
      pending: list.filter(o => o.status === 'Chờ xử lý').length,
      delivering: list.filter(o => o.status === 'Đang giao').length,
      done: completedOrders.length,
      cancelled: list.filter(o => o.status === 'Đã hủy').length,
    };
  });

  recentOrders = computed(() => this.orders().slice(0, 5));

  ngOnInit() {
    this.http.get<Order[]>('http://localhost:3000/orders').subscribe({
      next: (data) => { this.orders.set(data.reverse()); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  getProductName(order: Order): string {
    if (order.product) return order.product;
    if (order.items?.length) return order.items.map((i: any) => `${i.name} x${i.qty}`).join(', ');
    return '—';
  }

  getPrice(order: Order): string {
    if (order.price) return order.price;
    if (order.total) return order.total.toLocaleString('vi-VN') + '₫';
    return '—';
  }

  statusClass(s: string) {
    const map: Record<string, string> = {
      'Hoàn thành': 'bg-green-100 text-green-700',
      'Đang giao': 'bg-blue-100 text-blue-700',
      'Chờ xử lý': 'bg-yellow-100 text-yellow-700',
      'Đã hủy': 'bg-red-100 text-red-700',
    };
    return map[s] || 'bg-slate-100 text-slate-500';
  }
}
