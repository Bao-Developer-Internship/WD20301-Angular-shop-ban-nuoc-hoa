import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product-item/product-item';
import { AddToCartButton } from '../add-to-cart-button/add-to-cart-button';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, AddToCartButton],
  templateUrl: './product-detail.html',
})
export class ProductDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product = signal<Product | null>(null);
  loading = signal(true);
  selectedImage = signal(0);
  quantity = signal(1);
  showWholesale = signal(false);

  reviews = [
    { name: 'Nguyễn Hoàng', initial: 'NH', rating: 5, date: '2 ngày trước', comment: 'Mùi hương thực sự đẳng cấp. Độ bám tỏa cực tốt, dùng từ sáng đến tối vẫn còn nghe mùi.' },
    { name: 'Trần Tiến', initial: 'TT', rating: 5, date: '1 tuần trước', comment: 'Mùi trầm hương cực kỳ nịnh mũi. Giao hàng nhanh, nhân viên tư vấn nhiệt tình.' },
  ];

  wholesaleTiers = [
    { qty: '50+ chai', price: '2.450.000₫', discount: '-25%' },
    { qty: '100+ chai', price: '1.950.000₫', discount: '-40%' },
    { qty: '300+ chai', price: 'Liên hệ trực tiếp', discount: 'VIP' },
  ];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getById(id).subscribe({
        next: (p) => { this.product.set(p); this.loading.set(false); },
        error: () => this.loading.set(false),
      });
    }
  }

  stars(n: number) { return Array(Math.floor(n)).fill('★'); }
  emptyStars(n: number) { return Array(5 - Math.floor(n)).fill('☆'); }
}
