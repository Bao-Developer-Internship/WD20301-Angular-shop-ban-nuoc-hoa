import { Component, signal, inject, OnInit, computed } from '@angular/core';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../notification.service';

type OrderStatus = 'Chờ xử lý' | 'Đang giao' | 'Hoàn thành' | 'Đã hủy';

interface Order {
  id: string; customer: string; product?: string; items?: any[];
  price?: string; total?: number; status: OrderStatus;
  date: string; email?: string; phone?: string; address?: string;
}

@Component({
  selector: 'app-admin-orders',
  imports: [AdminSidebar, FormsModule],
  templateUrl: './admin-orders.html',
})
export class AdminOrders implements OnInit {
  private http = inject(HttpClient);
  private notifService = inject(NotificationService);
  private apiUrl = 'http://localhost:3000/orders';

  orders = signal<Order[]>([]);
  loading = signal(false);

  // Modal xác nhận
  confirmModal = signal<{ order: Order; nextStatus: OrderStatus } | null>(null);
  cancelReason = signal('');

  summary = computed(() => {
    const list = this.orders();
    return {
      total: list.length,
      pending: list.filter(o => o.status === 'Chờ xử lý').length,
      delivering: list.filter(o => o.status === 'Đang giao').length,
      done: list.filter(o => o.status === 'Hoàn thành').length,
      cancelled: list.filter(o => o.status === 'Đã hủy').length,
    };
  });

  ngOnInit() { this.loadOrders(); }

  loadOrders() {
    this.loading.set(true);
    this.http.get<Order[]>(this.apiUrl).subscribe({
      next: (data) => { this.orders.set(data.reverse()); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  openConfirm(order: Order, nextStatus: OrderStatus) {
    this.cancelReason.set('');
    this.confirmModal.set({ order, nextStatus });
  }

  doUpdateStatus() {
    const modal = this.confirmModal();
    if (!modal) return;
    const { order, nextStatus } = modal;
    const reason = nextStatus === 'Đã hủy' ? this.cancelReason() : undefined;

    this.http.patch(`${this.apiUrl}/${encodeURIComponent(order.id)}`, { status: nextStatus }).subscribe({
      next: () => {},
      error: () => {},
    });

    // Cập nhật local
    this.orders.update(list => list.map(o => o.id === order.id ? { ...o, status: nextStatus } : o));

    // Gửi thông báo cho khách
    if (order.email) {
      const typeMap: Record<string, any> = {
        'Đang giao': 'delivering',
        'Hoàn thành': 'completed',
        'Đã hủy': 'cancelled',
        'Chờ xử lý': 'confirmed',
      };
      this.notifService.push(order.id, order.email, typeMap[nextStatus], reason);
    }

    this.confirmModal.set(null);
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

  statusClass(s: OrderStatus) {
    const map: Record<OrderStatus, string> = {
      'Hoàn thành': 'bg-green-100 text-green-700',
      'Đang giao': 'bg-blue-100 text-blue-700',
      'Chờ xử lý': 'bg-yellow-100 text-yellow-700',
      'Đã hủy': 'bg-red-100 text-red-700',
    };
    return map[s] || 'bg-slate-100 text-slate-500';
  }

  nextStatuses(current: OrderStatus): OrderStatus[] {
    const map: Record<OrderStatus, OrderStatus[]> = {
      'Chờ xử lý': ['Đang giao', 'Đã hủy'],
      'Đang giao': ['Hoàn thành', 'Đã hủy'],
      'Hoàn thành': [], 'Đã hủy': [],
    };
    return map[current] || [];
  }

  refresh() { this.loadOrders(); }

  exportCSV() {
    const headers = ['Mã đơn', 'Khách hàng', 'Sản phẩm', 'Giá trị', 'Trạng thái', 'Ngày đặt'];
    const rows = this.orders().map(o => [o.id, o.customer, this.getProductName(o), this.getPrice(o), o.status, o.date]);
    const csv = [headers, ...rows].map(r => r.map(c => `"${c}"`).join(',')).join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `orders_${new Date().toLocaleDateString('vi-VN').replace(/\//g, '-')}.csv`;
    a.click(); URL.revokeObjectURL(url);
  }
}
