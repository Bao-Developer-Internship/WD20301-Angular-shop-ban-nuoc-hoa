import { Component } from '@angular/core';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';

@Component({
  selector: 'app-admin-orders',
  imports: [AdminSidebar],
  templateUrl: './admin-orders.html',
})
export class AdminOrders {
  orders = [
    { id: '#LS-9021', customer: 'Lê Nam', product: 'Midnight Rose EDP x2', price: '3.200.000₫', status: 'Hoàn thành', statusClass: 'bg-green-100 text-green-700', date: '22/05/2024' },
    { id: '#LS-9022', customer: 'Hà Thảo', product: 'Emerald Forest x1', price: '1.550.000₫', status: 'Đang giao', statusClass: 'bg-blue-100 text-blue-700', date: '23/05/2024' },
    { id: '#LS-9023', customer: 'Phan Vinh', product: 'Set Discovery x3', price: '2.850.000₫', status: 'Chờ xử lý', statusClass: 'bg-yellow-100 text-yellow-700', date: '24/05/2024' },
    { id: '#LS-9024', customer: 'Minh Anh', product: 'Gold Scent V1 x1', price: '4.200.000₫', status: 'Đã hủy', statusClass: 'bg-red-100 text-red-700', date: '24/05/2024' },
  ];
}
