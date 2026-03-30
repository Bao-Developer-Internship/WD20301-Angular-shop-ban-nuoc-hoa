import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './admin-sidebar.html',
})
export class AdminSidebar {
  menu = [
    { href: '/admin/dashboard', icon: '📊', label: 'Dashboard' },
    { href: '/admin/orders', icon: '🛍️', label: 'Đơn hàng' },
    { href: '/admin/customers', icon: '👥', label: 'Khách hàng' },
    { href: '/admin/products', icon: '📦', label: 'Sản phẩm' },
    { href: '/admin/collections', icon: '✨', label: 'Bộ sưu tập' },
    { href: '/admin/gallery', icon: '🖼️', label: 'Ảnh trang chủ' },
    { href: '/admin/settings', icon: '⚙️', label: 'Cài đặt' },
  ];
}
