import { Product } from '../product-item/product-item';

export const PRODUCTS: Product[] = [
  {
    id: '1', brand: 'LUXE SCENT', name: 'Imperial Lotus Extrait', price: 2450000, badge: 'New',
    img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80',
    description: 'Tinh hoa sen Việt Nam kết hợp với hương gỗ trầm phương Đông.',
    notes: { top: 'Sen trắng, Cam bergamot', heart: 'Trầm hương, Hoa nhài', base: 'Xạ hương, Gỗ đàn hương' },
    longevity: 5, sillage: 4, rating: 4.9, reviews: 128, sold: 2400, category: 'floral', status: 'active'
  },
  {
    id: '2', brand: 'SIGNATURE', name: 'Emerald Forest', price: 1890000,
    img: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&q=80',
    description: 'Hương rừng xanh mát lành, tươi mới như buổi sáng sớm.',
    notes: { top: 'Lá xanh, Bạch đàn', heart: 'Gỗ tuyết tùng, Vetiver', base: 'Rêu, Hổ phách xanh' },
    longevity: 4, sillage: 3, rating: 4.7, reviews: 95, sold: 1800, category: 'woody', status: 'active'
  },
  {
    id: '3', brand: 'LUXE SCENT', name: 'Golden Amber Oud', price: 3200000,
    img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80',
    description: 'Trầm hương vàng kết hợp hổ phách quý hiếm từ Trung Đông.',
    notes: { top: 'Hồng tiêu, Nghệ tây', heart: 'Trầm hương, Hoa hồng', base: 'Hổ phách, Xạ hương vàng' },
    longevity: 5, sillage: 5, rating: 4.8, reviews: 210, sold: 3100, category: 'oriental', status: 'active'
  },
  {
    id: '4', brand: 'EXCLUSIVE', name: 'Velvet Rose Musk', price: 2100000,
    img: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&q=80',
    description: 'Hoa hồng nhung mềm mại hòa quyện xạ hương ấm áp.',
    notes: { top: 'Hoa hồng, Quả lý chua', heart: 'Hoa mẫu đơn, Iris', base: 'Xạ hương trắng, Gỗ đàn hương' },
    longevity: 4, sillage: 4, rating: 4.6, reviews: 175, sold: 2200, category: 'floral', status: 'active'
  },
  {
    id: '5', brand: 'Maison Francis', name: 'Baccarat Rouge 540', price: 7250000, oldPrice: 8500000, badge: 'Bán Chạy',
    img: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&q=80',
    description: 'Huyền thoại nước hoa hiện đại, biểu tượng của sự sang trọng.',
    notes: { top: 'Nghệ tây, Grapefruit', heart: 'Hoa nhài, Ambroxan', base: 'Gỗ tuyết tùng, Xạ hương' },
    longevity: 5, sillage: 5, rating: 5.0, reviews: 512, sold: 8900, category: 'oriental', status: 'active'
  },
  {
    id: '6', brand: 'Byredo', name: "Rose of No Man's Land", price: 5400000,
    img: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&q=80',
    description: 'Hoa hồng hoang dã, tinh tế và đầy cảm xúc.',
    notes: { top: 'Hoa hồng Thổ Nhĩ Kỳ, Raspberry', heart: 'Hoa hồng, Hoa mẫu đơn', base: 'Papyrus, Xạ hương' },
    longevity: 4, sillage: 4, rating: 4.8, reviews: 320, sold: 4500, category: 'floral', status: 'active'
  },
  {
    id: '7', brand: 'Le Labo', name: 'Santal 33', price: 6800000, badge: 'Mới',
    img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&q=80',
    description: 'Gỗ đàn hương huyền thoại, mùi hương unisex được yêu thích nhất thế giới.',
    notes: { top: 'Violet, Cardamom', heart: 'Iris, Ambrette', base: 'Gỗ đàn hương, Xạ hương, Da thuộc' },
    longevity: 5, sillage: 4, rating: 4.9, reviews: 445, sold: 6700, category: 'woody', status: 'active'
  },
  {
    id: '8', brand: 'Dior', name: 'Sauvage Elixir', price: 4200000, oldPrice: 4800000,
    img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&q=80',
    description: 'Sức mạnh hoang dã của thiên nhiên, dành cho người đàn ông tự do.',
    notes: { top: 'Cam bergamot, Hồng tiêu', heart: 'Lavender, Geranium', base: 'Ambroxan, Gỗ đàn hương' },
    longevity: 5, sillage: 5, rating: 4.7, reviews: 389, sold: 5600, category: 'woody', status: 'active'
  },
  {
    id: '9', brand: 'Tom Ford', name: 'Tobacco Vanille', price: 8150000,
    img: 'https://images.unsplash.com/photo-1547887538-047f814d0d9a?w=400&q=80',
    description: 'Thuốc lá và vani sang trọng, ấm áp và quyến rũ.',
    notes: { top: 'Thuốc lá, Gia vị', heart: 'Vani, Cacao', base: 'Gỗ đàn hương, Xạ hương' },
    longevity: 5, sillage: 5, rating: 4.9, reviews: 267, sold: 3800, category: 'oriental', status: 'active'
  },
  {
    id: '10', brand: 'Creed', name: 'Aventus', price: 9600000,
    img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80',
    description: 'Biểu tượng của sự thành công và quyền lực.',
    notes: { top: 'Dứa, Cam bergamot, Táo đen', heart: 'Hoa nhài, Hoa hồng, Bạch dương', base: 'Xạ hương, Hổ phách, Gỗ đàn hương' },
    longevity: 5, sillage: 5, rating: 5.0, reviews: 634, sold: 11200, category: 'woody', status: 'active'
  }
];

export const COLLECTIONS = [
  {
    id: 'heritage', title: 'Heritage Collection', subtitle: 'Gói trọn linh hồn Việt Nam',
    description: 'Những dòng hương được chắt lọc từ tinh hoa thiên nhiên Việt Nam, kết hợp nghệ thuật chế tác truyền thống với kỹ thuật hiện đại.',
    brands: ['LUXE SCENT', 'EXCLUSIVE', 'SIGNATURE'],
    img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80'
  },
  {
    id: 'royal', title: 'Royal Signature', subtitle: 'Sự sang trọng vĩnh cửu',
    description: 'Tuyển chọn từ những nhà làm hương danh tiếng nhất thế giới — Maison Francis, Byredo, Le Labo, Dior.',
    brands: ['Maison Francis', 'Byredo', 'Le Labo', 'Dior'],
    img: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&q=80'
  },
  {
    id: 'winter', title: 'Winter Noir', subtitle: 'Nốt hương đêm huyền bí',
    description: 'Tom Ford và Creed — hai biểu tượng của sự quyền lực và bí ẩn.',
    brands: ['Tom Ford', 'Creed'],
    img: 'https://images.unsplash.com/photo-1547887538-047f814d0d9a?w=600&q=80'
  }
];
