import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
})
export class Login {
  isLogin = signal(true);
  loading = signal(false);
  error = signal('');

  formData = { email: '', password: '', name: '', phone: '' };

  toggle(mode: boolean) {
    this.isLogin.set(mode);
    this.error.set('');
  }

  submit() {
    this.error.set('');
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      alert(this.isLogin() ? 'Đăng nhập thành công!' : 'Đăng ký thành công!');
    }, 800);
  }
}
