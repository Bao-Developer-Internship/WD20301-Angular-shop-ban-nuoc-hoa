import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterLink, AdminSidebar],
  templateUrl: './dashboard.html',
})
export class AdminDashboard {
  stats = [
    { icon: '💰', label: 'Tổng doanh thu', value: '250.000.000₫', badge: '+15.4%', color: 'text-green-600' },
    { icon: '🛒', label: 'Đơn hàng mới', value: '128', badge: '+8.2%', color: 'text-green-600' },
    { icon: '📦', label: 'Tổng sản phẩm', value: '452', badge: 'Ổn định', color: 'text-slate-400' },
    { icon: '🏪', label: 'Khách sỉ mới', value: '12', badge: '+5%', color: 'text-green-600' },
  ];

  orders = [
    { id: '#LS-9021', customer: 'Lê Nam', initials: 'LN', product: 'Midnight Rose EDP x2', price: '3.200.000₫', status: 'Hoàn thành', statusClass: 'bg-green-100 text-green-700', date: '22/05/2024' },
    { id: '#LS-9022', customer: 'Hà Thảo', initials: 'HT', product: 'Emerald Forest x1', price: '1.550.000₫', status: 'Đang giao', statusClass: 'bg-blue-100 text-blue-700', date: '23/05/2024' },
    { id: '#LS-9023', customer: 'Phan Vinh', initials: 'PV', product: 'Set Discovery x3', price: '2.850.000₫', status: 'Chờ xử lý', statusClass: 'bg-yellow-100 text-yellow-700', date: '24/05/2024' },
    { id: '#LS-9024', customer: 'Minh Anh', initials: 'MA', product: 'Gold Scent V1 x1', price: '4.200.000₫', status: 'Đã hủy', statusClass: 'bg-red-100 text-red-700', date: '24/05/2024' },
  ];
}
