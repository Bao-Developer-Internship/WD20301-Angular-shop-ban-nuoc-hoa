import { Component, signal, inject } from '@angular/core';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';
import { FormsModule } from '@angular/forms';
import { AdminProductService } from '../admin-product.service';
import { Product } from '../../product-item/product-item';

interface CollectionProduct { id: string; name: string; badge: string; img: string; brand: string; }
interface Collection {
  label: string; icon: string; title: string; desc: string;
  status: 'Đang hiển thị' | 'Sắp ra mắt'; img: string; products: CollectionProduct[];
  stats: { label: string; value: string }[];
}
interface Change { field: string; oldValue: string; newValue: string; }

const IMGS = [
  '/assets/images/San-Pham/SP1.jpg','/assets/images/San-Pham/SP2.jpg','/assets/images/San-Pham/SP3.jpg',
  '/assets/images/San-Pham/SP4.jpg','/assets/images/San-Pham/Sp5.jpg','/assets/images/San-Pham/SP6.jpg',
  '/assets/images/San-Pham/SP7.jpg','/assets/images/San-Pham/SP8.jpg','/assets/images/San-Pham/SP9.jpg',
  '/assets/images/San-Pham/SP10.jpg','/assets/images/San-Pham/SP11.jpg','/assets/images/San-Pham/SP12.jpg',
];

@Component({
  selector: 'app-admin-collections',
  imports: [AdminSidebar, FormsModule],
  templateUrl: './admin-collections.html',
})
export class AdminCollections {
  private adminProductService = inject(AdminProductService);
  activeTab = signal<string>('spring');
  changes = signal<Change[]>([]);

  // Danh sách sản phẩm thật để chọn
  get availableProducts(): Product[] {
    return this.adminProductService.products().filter(p => p.status !== 'hidden');
  }

  showProductPicker = signal(false);
  showModal = signal(false);
  showAddModal = signal(false);
  deleteConfirm = signal<{ index: number; name: string } | null>(null);
  editingDesc = signal(false);
  descDraft = signal('');
  saving = signal(false);
  saved = signal(false);
  productImages = IMGS;

  newProduct: CollectionProduct = { id: '', name: '', badge: 'New', img: IMGS[0], brand: '' };

  collections: Record<string, Collection> = {
    spring: {
      label: 'Mùa Xuân', icon: '🌸', title: 'Bộ sưu tập Xuân 2026', status: 'Đang hiển thị',
      desc: 'Hương thơm nhẹ nhàng từ hoa cỏ và cam chanh, mang lại cảm giác tươi mới của buổi sáng đầu xuân.',
      img: '/assets/images/San-Pham/SP1.jpg',
      products: [],
      stats: [{ label: 'Lượt xem', value: '12.840' }, { label: 'Chuyển đổi', value: '3.2%' }, { label: 'Tồn kho', value: '458 sp' }, { label: 'Đánh giá TB', value: '4.9/5' }],
    },
    summer: {
      label: 'Mùa Hạ', icon: '☀️', title: 'Bộ sưu tập Hạ 2026', status: 'Đang hiển thị',
      desc: 'Hương biển mát lạnh, trái cây nhiệt đới và gỗ trắng — năng lượng của mùa hè rực rỡ.',
      img: '/assets/images/San-Pham/SP7.jpg',
      products: [],
      stats: [{ label: 'Lượt xem', value: '9.210' }, { label: 'Chuyển đổi', value: '2.8%' }, { label: 'Tồn kho', value: '312 sp' }, { label: 'Đánh giá TB', value: '4.7/5' }],
    },
    autumn: {
      label: 'Mùa Thu', icon: '🍂', title: 'Bộ sưu tập Thu 2026', status: 'Sắp ra mắt',
      desc: 'Hương gỗ ấm áp, lá khô và gia vị — gợi lên vẻ đẹp trầm mặc của những buổi chiều thu.',
      img: '/assets/images/San-Pham/SP4.jpg',
      products: [],
      stats: [{ label: 'Lượt xem', value: '7.430' }, { label: 'Chuyển đổi', value: '4.1%' }, { label: 'Tồn kho', value: '280 sp' }, { label: 'Đánh giá TB', value: '4.8/5' }],
    },
    winter: {
      label: 'Mùa Đông', icon: '❄️', title: 'Bộ sưu tập Đông 2026', status: 'Sắp ra mắt',
      desc: 'Hương xạ hương, vani và gỗ tuyết tùng — ấm áp và sang trọng như những đêm đông lạnh giá.',
      img: '/assets/images/San-Pham/SP9.jpg',
      products: [],
      stats: [{ label: 'Lượt xem', value: '5.670' }, { label: 'Chuyển đổi', value: '3.6%' }, { label: 'Tồn kho', value: '195 sp' }, { label: 'Đánh giá TB', value: '4.9/5' }],
    },
  };

  get season() { return this.collections[this.activeTab()]; }
  get tabs() { return Object.entries(this.collections); }

  setTab(key: string) { this.activeTab.set(key); this.editingDesc.set(false); }

  toggleStatus() {
    const old = this.season.status;
    const next = old === 'Đang hiển thị' ? 'Sắp ra mắt' : 'Đang hiển thị';
    this.season.status = next;
    this.addChange(`Trạng thái — ${this.season.label}`, old, next);
  }

  startEditDesc() { this.descDraft.set(this.season.desc); this.editingDesc.set(true); }

  saveDesc() {
    const d = this.descDraft().trim();
    if (d !== this.season.desc) {
      this.addChange(`Mô tả — ${this.season.label}`, this.season.desc, d);
      this.season.desc = d;
    }
    this.editingDesc.set(false);
  }

  openAddModal() {
    this.showProductPicker.set(true);
  }

  addProductFromList(product: Product) {
    // Kiểm tra đã có chưa
    if (this.season.products.find(p => p.id === product.id)) return;
    const old = this.season.products.map(p => p.name).join(', ');
    const newProd: CollectionProduct = {
      id: product.id, name: product.name,
      badge: product.badge || '', img: product.img, brand: product.brand
    };
    this.season.products = [...this.season.products, newProd];
    this.addChange(`Thêm SP — ${this.season.label}`, old || '(trống)', this.season.products.map(p => p.name).join(', '));
    this.showProductPicker.set(false);
  }

  addProduct() { /* không dùng nữa */ }

  confirmDeleteProduct(i: number, name: string) { this.deleteConfirm.set({ index: i, name }); }

  doDelete() {
    const d = this.deleteConfirm();
    if (!d) return;
    const old = this.season.products.map(p => p.name).join(', ');
    this.season.products = this.season.products.filter((_, i) => i !== d.index);
    this.addChange(`Xóa SP — ${this.season.label}`, old, this.season.products.map(p => p.name).join(', ') || '(trống)');
    this.deleteConfirm.set(null);
  }

  addChange(field: string, oldValue: string, newValue: string) {
    this.changes.update(list => {
      const filtered = list.filter(c => c.field !== field);
      return [...filtered, { field, oldValue, newValue }];
    });
  }

  async saveAll() {
    this.saving.set(true);
    await new Promise(r => setTimeout(r, 1000));
    this.saving.set(false);
    this.showModal.set(false);
    this.changes.set([]);
    this.saved.set(true);
    setTimeout(() => this.saved.set(false), 3000);
  }
}
