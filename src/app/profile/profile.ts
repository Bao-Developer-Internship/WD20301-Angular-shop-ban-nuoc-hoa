import { Component, inject, signal, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AuthService } from '../auth.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-profile',
  imports: [RouterLink, FormsModule, DatePipe],
  templateUrl: './profile.html',
})
export class Profile implements OnInit {
  auth = inject(AuthService);
  notifService = inject(NotificationService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  activeTab = signal<'profile' | 'orders' | 'password' | 'notifications'>('profile');

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['tab']) this.activeTab.set(params['tab']);
    });
  }

  get notifications() {
    const email = this.auth.user()?.email;
    return email ? this.notifService.getForEmail(email) : [];
  }

  get unreadCount() {
    const email = this.auth.user()?.email;
    return email ? this.notifService.unreadCount(email) : 0;
  }

  markAllRead() {
    const email = this.auth.user()?.email;
    if (email) this.notifService.markAllRead(email);
  }

  notifIcon(type: string) {
    const map: Record<string, string> = {
      confirmed: '✅', delivering: '🚚', completed: '🎉', cancelled: '❌'
    };
    return map[type] || '📢';
  }

  notifClass(type: string) {
    const map: Record<string, string> = {
      confirmed: 'border-green-200 bg-green-50',
      delivering: 'border-blue-200 bg-blue-50',
      completed: 'border-green-200 bg-green-50',
      cancelled: 'border-red-200 bg-red-50',
    };
    return map[type] || 'border-slate-200 bg-white';
  }

  form = {
    name: this.auth.user()?.name || '',
    phone: this.auth.user()?.phone || '',
    address: this.auth.user()?.address || '',
  };

  passwordForm = { current: '', newPw: '', confirm: '' };
  saved = signal(false);
  pwError = signal('');
  pwSaved = signal(false);

  orders = [
    { id: 'LS-2026-001', date: '10/03/2026', status: 'Đã giao', statusClass: 'bg-green-100 text-green-700', total: 8500000, product: 'Baccarat Rouge 540 x1' },
    { id: 'LS-2026-002', date: '18/03/2026', status: 'Đang giao', statusClass: 'bg-blue-100 text-blue-700', total: 7100000, product: 'Velvet Rose x2' },
    { id: 'LS-2026-003', date: '22/03/2026', status: 'Đang xử lý', statusClass: 'bg-yellow-100 text-yellow-700', total: 4200000, product: 'Santal 33 x1' },
  ];

  get initials() {
    return this.auth.initials();
  }

  saveProfile() {
    this.auth.updateUser(this.form);
    this.saved.set(true);
    setTimeout(() => this.saved.set(false), 2000);
  }

  savePassword() {
    this.pwError.set('');
    if (!this.passwordForm.current) { this.pwError.set('Nhập mật khẩu hiện tại'); return; }
    if (this.passwordForm.newPw.length < 6) { this.pwError.set('Mật khẩu mới tối thiểu 6 ký tự'); return; }
    if (this.passwordForm.newPw !== this.passwordForm.confirm) { this.pwError.set('Mật khẩu xác nhận không khớp'); return; }
    this.pwSaved.set(true);
    this.passwordForm = { current: '', newPw: '', confirm: '' };
    setTimeout(() => this.pwSaved.set(false), 2000);
  }

  onAvatarChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => this.auth.updateUser({ avatarUrl: e.target?.result as string });
    reader.readAsDataURL(file);
  }

  logout() { this.auth.logout(); this.router.navigate(['/']); }
}
