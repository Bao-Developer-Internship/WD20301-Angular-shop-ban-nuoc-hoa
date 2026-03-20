import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  selectedImage = signal(0);
  quantity = signal(1);
  showWholesale = signal(false);

  product = {
    name: 'Elite Royal Oud',
    brand: 'Parfum de Prestige',
    price: 4500000,
    salePrice: 3250000,
    rating: 4.9,
    reviews: 128,
    sold: 2400,
    description: 'Elite Royal Oud là bản giao hưởng của sự quyền quý, kết hợp giữa tinh túy của gỗ Trầm hương phương Đông và vẻ tươi mát của Cam Bergamot Ý.',
    images: [
      'https://fimgs.net/mdimg/perfume/375x500.73669.jpg',
      'https://fimgs.net/mdimg/perfume/375x500.1826.jpg',
      'https://fimgs.net/mdimg/perfume/375x500.2825.jpg',
      'https://fimgs.net/mdimg/perfume/375x500.14365.jpg',
    ],
    notes: {
      top: 'Cam Bergamot, Hồng tiêu, Cây bách',
      heart: 'Hoa hồng Bulgary, Trầm hương, Gỗ tuyết tùng',
      base: 'Hổ phách, Xạ hương trắng, Hoắc hương',
    },
    longevity: 5,
    sillage: 4,
  };

  reviews = [
    { name: 'Nguyễn Hoàng', initial: 'NH', rating: 5, date: '2 ngày trước', comment: 'Mùi hương thực sự đẳng cấp. Độ bám tỏa cực tốt, dùng từ sáng đến tối vẫn còn nghe mùi.' },
    { name: 'Trần Tiến', initial: 'TT', rating: 5, date: '1 tuần trước', comment: 'Mùi trầm hương cực kỳ nịnh mũi. Giao hàng nhanh, nhân viên tư vấn nhiệt tình.' },
  ];

  wholesaleTiers = [
    { qty: '50+ chai', price: '2.450.000₫', discount: '-25%' },
    { qty: '100+ chai', price: '1.950.000₫', discount: '-40%' },
    { qty: '300+ chai', price: 'Liên hệ trực tiếp', discount: 'VIP' },
  ];

  stars(n: number) { return Array(Math.floor(n)).fill('★'); }
  emptyStars(n: number) { return Array(5 - Math.floor(n)).fill('☆'); }
}
