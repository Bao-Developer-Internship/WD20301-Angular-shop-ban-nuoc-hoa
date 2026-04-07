import { Component, inject, signal } from '@angular/core';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';
import { FormsModule } from '@angular/forms';
import { AdminProductService } from '../admin-product.service';
import { Product } from '../../product-item/product-item';

@Component({
  selector: 'app-admin-products',
  imports: [AdminSidebar, FormsModule],
  templateUrl: './admin-products.html',
})
export class AdminProducts {
  adminService = inject(AdminProductService);

  showForm = signal(false);
  editingId = signal<string | null>(null);
  saved = signal(false);

  form: Partial<Product> = this.emptyForm();

  emptyForm(): Partial<Product> {
    return {
      name: '', brand: '', price: 0, description: '', img: '',
      category: 'floral', longevity: 3, sillage: 3,
      rating: 0, reviews: 0, sold: 0, hidden: false,
    };
  }

  openAdd() {
    this.form = this.emptyForm();
    this.editingId.set(null);
    this.showForm.set(true);
  }

  openEdit(p: Product) {
    this.form = { ...p };
    this.editingId.set(p.id);
    this.showForm.set(true);
  }

  save() {
    if (!this.form.name || !this.form.brand || !this.form.price) return;
    if (this.editingId()) {
      this.adminService.update(this.editingId()!, this.form);
    } else {
      this.adminService.add(this.form as Omit<Product, 'id'>);
    }
    this.showForm.set(false);
    this.saved.set(true);
    setTimeout(() => this.saved.set(false), 2000);
  }

  delete(id: string) {
    if (confirm('Xóa sản phẩm này?')) this.adminService.delete(id);
  }

  toggleHidden(id: string) { this.adminService.toggleHidden(id); }

  cancel() { this.showForm.set(false); }
}
