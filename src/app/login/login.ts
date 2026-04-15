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
        // Đăng nhập — kiểm tra TEST_ACCOUNTS trước
        const account = TEST_ACCOUNTS.find(
          a => a.email === this.form.email && a.password === this.form.password
        );
        if (account) {
          this.authService.login({ name: account.name, email: account.email, role: account.role, phone: account.phone });
          this.router.navigate(account.role === 'admin' ? ['/admin/dashboard'] : ['/']);
          this.loading.set(false);
          return;
        }
        // Kiểm tra user đã đăng ký trong backend
        fetch(`http://localhost:3000/users?email=${encodeURIComponent(this.form.email)}`)
          .then(r => r.json())
          .then((users: any[]) => {
            const user = users.find(u => u.password === this.form.password);
            if (user) {
              this.authService.login({ name: user.name, email: user.email, role: 'user', phone: user.phone });
              this.router.navigate(['/']);
            } else {
              this.error.set('Email hoặc mật khẩu không đúng');
            }
          })
          .catch(() => this.error.set('Email hoặc mật khẩu không đúng'))
          .finally(() => this.loading.set(false));
      } else {
        // Đăng ký — lưu vào backend
        const newUser = {
          name: this.form.name,
          email: this.form.email,
          phone: this.form.phone,
          password: this.form.password,
          role: 'user',
          createdAt: new Date().toISOString(),
        };
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
        })
          .then(() => {
            this.authService.login({ name: newUser.name, email: newUser.email, role: 'user', phone: newUser.phone });
            this.router.navigate(['/']);
          })
          .catch(() => {
            // Fallback nếu backend offline
            this.authService.login({ name: this.form.name, email: this.form.email, role: 'user', phone: this.form.phone });
            this.router.navigate(['/']);
          })
          .finally(() => this.loading.set(false));
      }
    }, 300);
  }

  switchTab(login: boolean) { this.isLogin.set(login); this.error.set(''); }
}
