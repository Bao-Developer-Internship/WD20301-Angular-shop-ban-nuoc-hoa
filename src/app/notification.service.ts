import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface Notification {
  id: string;
  orderId: string;
  email: string;
  type: 'confirmed' | 'delivering' | 'completed' | 'cancelled';
  message: string;
  reason?: string;
  createdAt: string;
  read: boolean;
}

const STORAGE_KEY = 'luxe_notifications';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private _notifications = signal<Notification[]>(this.load());
  notifications = this._notifications.asReadonly();

  private load(): Notification[] {
    if (!this.isBrowser) return [];
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch { return []; }
  }

  private save() {
    if (this.isBrowser)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._notifications()));
  }

  // Admin gọi khi cập nhật trạng thái
  push(orderId: string, email: string, type: Notification['type'], reason?: string) {
    const messages: Record<Notification['type'], string> = {
      confirmed: `Đơn hàng #${orderId} đã được xác nhận và đang được chuẩn bị.`,
      delivering: `Đơn hàng #${orderId} đang trên đường giao đến bạn.`,
      completed: `Đơn hàng #${orderId} đã giao thành công. Cảm ơn bạn!`,
      cancelled: `Đơn hàng #${orderId} đã bị hủy.${reason ? ' Lý do: ' + reason : ''}`,
    };
    const notif: Notification = {
      id: Date.now().toString(),
      orderId, email, type,
      message: messages[type],
      reason,
      createdAt: new Date().toISOString(),
      read: false,
    };
    this._notifications.update(list => [notif, ...list]);
    this.save();
  }

  // Khách hàng đọc thông báo của mình
  getForEmail(email: string): Notification[] {
    return this._notifications().filter(n => n.email === email);
  }

  unreadCount(email: string): number {
    return this._notifications().filter(n => n.email === email && !n.read).length;
  }

  markRead(id: string) {
    this._notifications.update(list => list.map(n => n.id === id ? { ...n, read: true } : n));
    this.save();
  }

  markAllRead(email: string) {
    this._notifications.update(list => list.map(n => n.email === email ? { ...n, read: true } : n));
    this.save();
  }
}
