import { Component, inject, signal } from '@angular/core';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';
import { FormsModule } from '@angular/forms';
import { ThemeService, ThemeColors } from '../../theme.service';

@Component({
  selector: 'app-admin-settings',
  imports: [AdminSidebar, FormsModule],
  templateUrl: './admin-settings.html',
})
export class AdminSettings {
  themeService = inject(ThemeService);

  activeTab = signal<'colors' | 'general' | 'contact'>('colors');
  saved = signal(false);

  // Colors — clone để preview trước khi lưu
  colors: ThemeColors = { ...this.themeService.colors() };

  // General
  siteName = 'LUXE SCENT';
  tagline = 'HƯƠNG THƠM VĨNH CỬU';
  minFreeShip = '500.000';

  // Contact
  hotline = '1900-LUXE (5893)';
  email = 'hello@luxescent.vn';
  address = '123 Đường Lê Lợi, Q.1, TP.HCM';
  hours = '8:00 - 22:00 (Tất cả các ngày)';

  colorFields = [
    { key: 'primary' as keyof ThemeColors, label: 'Màu chủ đạo', desc: 'Header, nút chính, tiêu đề' },
    { key: 'accent' as keyof ThemeColors, label: 'Màu điểm nhấn (Gold)', desc: 'Badge, border, nút phụ' },
    { key: 'background' as keyof ThemeColors, label: 'Màu nền', desc: 'Background trang chính' },
  ];

  onColorChange(key: keyof ThemeColors, value: string) {
    this.colors = { ...this.colors, [key]: value };
    // Live preview
    this.themeService.applyToDOM(this.colors);
  }

  save() {
    this.themeService.apply(this.colors);
    this.saved.set(true);
    setTimeout(() => this.saved.set(false), 3000);
  }

  reset() {
    this.themeService.reset();
    this.colors = { ...this.themeService.colors() };
  }
}
