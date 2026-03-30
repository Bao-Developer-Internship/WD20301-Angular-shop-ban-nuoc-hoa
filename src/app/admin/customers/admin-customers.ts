import { Component } from '@angular/core';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';

@Component({
  selector: 'app-admin-customers',
  imports: [AdminSidebar],
  templateUrl: './admin-customers.html',
})
export class AdminCustomers {
  customers = [
    { name: 'Nguyễn Hoàng', email: 'hoang@email.com', phone: '0901234567', orders: 5, total: '12.500.000₫', joined: '01/01/2024' },
    { name: 'Trần Thị Mai', email: 'mai@email.com', phone: '0912345678', orders: 3, total: '8.200.000₫', joined: '15/02/2024' },
    { name: 'Lê Văn Nam', email: 'nam@email.com', phone: '0923456789', orders: 8, total: '24.600.000₫', joined: '10/03/2024' },
    { name: 'Phạm Thu Hà', email: 'ha@email.com', phone: '0934567890', orders: 2, total: '5.100.000₫', joined: '20/04/2024' },
  ];
}
