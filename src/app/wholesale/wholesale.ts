import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wholesale',
  imports: [FormsModule],
  templateUrl: './wholesale.html',
})
export class Wholesale {
  formData = { name: '', phone: '', business: '', region: 'Miền Nam', message: '' };

  tiers = [
    { title: 'Gói Bắt Đầu', discount: '25%', featured: false, items: ['Tối thiểu từ 50 sản phẩm', 'Hỗ trợ hình ảnh marketing', 'Tư vấn chọn mùi bán chạy'] },
    { title: 'Gói Đại Lý', discount: '35%', featured: true, items: ['Từ 200 - 500 sản phẩm', 'Tặng kệ trưng bày cao cấp', 'Đào tạo kiến thức nước hoa', 'Hỗ trợ chạy quảng cáo khu vực'] },
    { title: 'Gói Phân Phối', discount: '45%', featured: false, items: ['Trên 1000 sản phẩm', 'Độc quyền phân phối khu vực', 'Thiết kế showroom miễn phí', 'Thưởng doanh số quý/năm'] },
  ];

  stats = [
    { n: '50+', label: 'Mùi hương độc bản' },
    { n: '12h+', label: 'Độ lưu hương lâu' },
    { n: '24h', label: 'Xử lý đơn hàng' },
    { n: 'Free', label: 'Giao hàng toàn quốc' },
  ];

  submit() {
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ trong vòng 2 giờ làm việc.');
  }
}
