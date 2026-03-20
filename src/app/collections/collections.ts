import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Season {
  id: string;
  name: string;
  nameEn: string;
  subtitle: string;
  description: string;
  img: string;
  color: string;
}

@Component({
  selector: 'app-collections',
  imports: [RouterLink],
  templateUrl: './collections.html',
})
export class Collections {
  seasons: Season[] = [
    { id: 'spring', name: 'Xuân', nameEn: 'Spring', subtitle: 'Giai đoạn chuyển mình', description: 'Sự bùng nổ của hoa anh đào và cỏ xanh mới nhú. Những nốt hương phấn nhẹ nhàng, thuần khiết như hơi thở buổi sớm.', img: 'https://fimgs.net/mdimg/perfume/375x500.1406.jpg', color: '#FFB6C1' },
    { id: 'summer', name: 'Hạ', nameEn: 'Summer', subtitle: 'Năng lượng rực rỡ', description: 'Tươi mát với cam Bergamot, quýt mọng và hương muối biển mặn mà. Khơi gợi tinh thần tự do dưới ánh nắng vàng.', img: 'https://fimgs.net/mdimg/perfume/375x500.41675.jpg', color: '#FFA500' },
    { id: 'autumn', name: 'Thu', nameEn: 'Autumn', subtitle: 'Hoài niệm tĩnh lặng', description: 'Ấm áp với hổ phách, gỗ tuyết tùng và lá khô. Một bản giao hưởng nồng nàn, sâu lắng dành cho những tâm hồn mơ mộng.', img: 'https://fimgs.net/mdimg/perfume/375x500.14365.jpg', color: '#D2691E' },
    { id: 'winter', name: 'Đông', nameEn: 'Winter', subtitle: 'Huyền bí quyến rũ', description: 'Sâu đậm với xạ hương, trầm và gia vị phương đông. Hương thơm bao bọc, quyền quý giữa cái lạnh giá băng.', img: 'https://fimgs.net/mdimg/perfume/375x500.73669.jpg', color: '#4682B4' },
  ];
}
