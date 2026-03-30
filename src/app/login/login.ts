import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService, TEST_ACCOUNTS } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
})
export class Login {
  private router = inject(Router);
  private authService = inject(AuthService);

  isLogin = signal(true);
  loading = signal(false);
  error = signal('');

  form = { name: '', phone: '', email: '', password: '' };

  validate(): string | null {
    if (!this.form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email))
      return 'Email không hợp lệ';
    if (!this.form.password || this.form.password.length < 6)
      return 'Mật khẩu tối thiểu 6 ký tự';
    if (!this.isLogin()) {
      if (!this.form.name || this.form.name.length < 2) return 'Tên tối thiểu 2 ký tự';
      if (!this.form.phone || !/^0\d{9}$/.test(this.form.phone)) return 'Số điện thoại không hợp lệ';
    }
    return null;
  }

  submit() {
    this.error.set('');
    const err = this.validate();
    if (err) { this.error.set(err); return; }

    this.loading.set(true);
    setTimeout(() => {
      if (this.isLogin()) {
        const account = TEST_ACCOUNTS.find(
          a => a.email === this.form.email && a.password === this.form.password
        );
        if (!account) {
          this.error.set('Email hoặc mật khẩu không đúng');
          this.loading.set(false);
          return;
        }
        this.authService.login({ name: account.name, email: account.email, role: account.role, phone: account.phone });
        this.router.navigate(account.role === 'admin' ? ['/admin/dashboard'] : ['/']);
      } else {
        // Đăng ký — tạo user mới
        this.authService.login({ name: this.form.name, email: this.form.email, role: 'user', phone: this.form.phone });
        this.router.navigate(['/']);
      }
      this.loading.set(false);
    }, 800);
  }

  switchTab(login: boolean) { this.isLogin.set(login); this.error.set(''); }
}
