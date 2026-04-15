import { Injectable, signal, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface User {
  name: string;
  email: string;
  role: 'user' | 'admin';
  phone?: string;
  address?: string;
  avatarUrl?: string;
}

// Tài khoản test
export const TEST_ACCOUNTS = [
  { email: 'user@luxescent.vn', password: 'User@123456', name: 'Nguyễn Văn A', role: 'user' as const, phone: '0901234567' },
  { email: 'admin@luxescent.com', password: 'Admin@123456', name: 'Admin Luxe', role: 'admin' as const, phone: '0909999999' },
];

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = signal<User | null>(null);

  user = this._user.asReadonly();
  isLoggedIn = computed(() => this._user() !== null);
  isAdmin = computed(() => this._user()?.role === 'admin');

  // Initials avatar từ tên
  initials = computed(() => {
    const name = this._user()?.name || '';
    return name.split(' ').map(w => w[0]).slice(-2).join('').toUpperCase() || '?';
  });

  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  constructor() {
    if (!this.isBrowser) return;
    // Clear old keys từ version cũ
    if (localStorage.getItem('admin_token') && !localStorage.getItem('luxe_user')) {
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_user');
    }
    const stored = localStorage.getItem('luxe_user');
    if (stored) {
      try { this._user.set(JSON.parse(stored)); } catch {}
    }
  }

  login(user: User) {
    this._user.set(user);
    if (this.isBrowser) {
      localStorage.setItem('luxe_user', JSON.stringify(user));
      if (user.role === 'admin') {
        localStorage.setItem('admin_token', 'mock_admin_token');
        localStorage.setItem('admin_user', JSON.stringify(user));
      }
    }
  }

  updateUser(data: Partial<User>) {
    const updated = { ...this._user()!, ...data };
    this._user.set(updated);
    if (this.isBrowser) localStorage.setItem('luxe_user', JSON.stringify(updated));
  }

  logout() {
    this._user.set(null);
    if (this.isBrowser) {
      localStorage.removeItem('luxe_user');
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_user');
    }
  }
}
