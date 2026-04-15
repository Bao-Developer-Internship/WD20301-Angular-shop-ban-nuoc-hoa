import { Component, signal } from '@angular/core';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';
import { FormsModule } from '@angular/forms';

type Role = 'admin' | 'manager' | 'staff' | 'viewer';

interface Permission {
  key: string;
  label: string;
  desc: string;
}

interface StaffMember {
  id: string;
  name: string;
  email: string;
  role: Role;
  permissions: string[];
  active: boolean;
  joinDate: string;
}

const ALL_PERMISSIONS: Permission[] = [
  { key: 'orders.view', label: 'Xem đơn hàng', desc: 'Xem danh sách và chi tiết đơn' },
  { key: 'orders.update', label: 'Cập nhật đơn hàng', desc: 'Thay đổi trạng thái đơn hàng' },
  { key: 'products.view', label: 'Xem sản phẩm', desc: 'Xem danh sách sản phẩm' },
  { key: 'products.edit', label: 'Sửa sản phẩm', desc: 'Thêm, sửa, xóa sản phẩm' },
  { key: 'customers.view', label: 'Xem khách hàng', desc: 'Xem danh sách khách hàng' },
  { key: 'customers.edit', label: 'Sửa khách hàng', desc: 'Chỉnh sửa thông tin khách' },
  { key: 'collections.edit', label: 'Quản lý bộ sưu tập', desc: 'Thêm/xóa sản phẩm trong collection' },
  { key: 'gallery.edit', label: 'Quản lý ảnh', desc: 'Upload/xóa ảnh trang chủ' },
  { key: 'settings.edit', label: 'Cài đặt hệ thống', desc: 'Thay đổi màu sắc, thông tin web' },
  { key: 'staff.manage', label: 'Quản lý nhân viên', desc: 'Thêm/xóa/phân quyền nhân viên' },
];

const ROLE_DEFAULTS: Record<Role, string[]> = {
  admin: ALL_PERMISSIONS.map(p => p.key),
  manager: ['orders.view', 'orders.update', 'products.view', 'products.edit', 'customers.view', 'collections.edit', 'gallery.edit'],
  staff: ['orders.view', 'orders.update', 'products.view', 'customers.view'],
  viewer: ['orders.view', 'products.view', 'customers.view'],
};

const ROLE_LABELS: Record<Role, string> = {
  admin: 'Quản trị viên', manager: 'Quản lý', staff: 'Nhân viên', viewer: 'Xem'
};

const ROLE_COLORS: Record<Role, string> = {
  admin: 'bg-red-100 text-red-700',
  manager: 'bg-purple-100 text-purple-700',
  staff: 'bg-blue-100 text-blue-700',
  viewer: 'bg-slate-100 text-slate-500',
};

@Component({
  selector: 'app-admin-staff',
  imports: [AdminSidebar, FormsModule],
  templateUrl: './admin-staff.html',
})
export class AdminStaff {
  allPermissions = ALL_PERMISSIONS;
  roleLabels = ROLE_LABELS;
  roleColors = ROLE_COLORS;
  roles: Role[] = ['admin', 'manager', 'staff', 'viewer'];

  staff = signal<StaffMember[]>([
    { id: '1', name: 'Admin Luxe', email: 'admin@luxescent.com', role: 'admin', permissions: ROLE_DEFAULTS.admin, active: true, joinDate: '01/01/2024' },
    { id: '2', name: 'Nguyễn Thị Mai', email: 'mai@luxescent.com', role: 'manager', permissions: ROLE_DEFAULTS.manager, active: true, joinDate: '15/03/2024' },
    { id: '3', name: 'Trần Văn Hùng', email: 'hung@luxescent.com', role: 'staff', permissions: ROLE_DEFAULTS.staff, active: true, joinDate: '01/06/2024' },
  ]);

  editingId = signal<string | null>(null);
  showAddModal = signal(false);
  saved = signal(false);

  newStaff = { name: '', email: '', role: 'staff' as Role };

  get editingMember() {
    return this.staff().find(s => s.id === this.editingId()) || null;
  }

  startEdit(id: string) { this.editingId.set(id); }

  changeRole(id: string, role: Role) {
    this.staff.update(list => list.map(s =>
      s.id === id ? { ...s, role, permissions: [...ROLE_DEFAULTS[role]] } : s
    ));
  }

  togglePermission(id: string, perm: string) {
    this.staff.update(list => list.map(s => {
      if (s.id !== id) return s;
      const perms = s.permissions.includes(perm)
        ? s.permissions.filter(p => p !== perm)
        : [...s.permissions, perm];
      return { ...s, permissions: perms };
    }));
  }

  hasPermission(id: string, perm: string) {
    return this.staff().find(s => s.id === id)?.permissions.includes(perm) ?? false;
  }

  toggleActive(id: string) {
    this.staff.update(list => list.map(s => s.id === id ? { ...s, active: !s.active } : s));
  }

  saveEdit() {
    this.editingId.set(null);
    this.saved.set(true);
    setTimeout(() => this.saved.set(false), 2000);
  }

  addStaff() {
    if (!this.newStaff.name || !this.newStaff.email) return;
    const member: StaffMember = {
      id: Date.now().toString(),
      name: this.newStaff.name,
      email: this.newStaff.email,
      role: this.newStaff.role,
      permissions: [...ROLE_DEFAULTS[this.newStaff.role]],
      active: true,
      joinDate: new Date().toLocaleDateString('vi-VN'),
    };
    this.staff.update(list => [...list, member]);
    this.newStaff = { name: '', email: '', role: 'staff' };
    this.showAddModal.set(false);
  }

  removeStaff(id: string) {
    if (id === '1') return; // Không xóa admin chính
    this.staff.update(list => list.filter(s => s.id !== id));
  }
}
