import { Component, inject, signal, OnInit } from '@angular/core';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';
import { HttpClient } from '@angular/common/http';

interface Customer {
  id?: string; name: string; email: string; phone?: string;
  role?: string; createdAt?: string;
}

@Component({
  selector: 'app-admin-customers',
  imports: [AdminSidebar],
  templateUrl: './admin-customers.html',
})
export class AdminCustomers implements OnInit {
  private http = inject(HttpClient);
  customers = signal<Customer[]>([]);
  loading = signal(true);

  ngOnInit() {
    this.http.get<Customer[]>('http://localhost:3000/users').subscribe({
      next: (data) => { this.customers.set(data); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  formatDate(iso?: string) {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('vi-VN');
  }
}
