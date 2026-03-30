import { Product } from '../product-item/product-item';

export const PRODUCTS: Product[] = [
  {
    id: '1', brand: 'LUXE SCENT', name: 'Imperial Lotus Extrait', price: 2450000, badge: 'New',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiFu1XaVq-BfotVaGW61hyNQ4aKvHAd4brGaY1pLih3Krx27Lj2xt62BbZWE1G7sTlUWGb8CEHUDMxgeR0s7ONTYUPzfLt9Ac2CWIBKx7Ere0axsxyjT2imbEHyZM82kW91DdV4l3tc2KJWy7OA34r8-e0lCDbuKLPXPWWhQCJT27wuLhbY2Hz9UOFQ2gdCQIRqThRi9Gry0HgQQ0UeFUI4S94gocwkZioZjMBoZspBM0n8yq7wMd4wv9Tv4qeC7puRBZaSBKzpg0',
    description: 'Tinh hoa sen Việt Nam kết hợp với hương gỗ trầm phương Đông.',
    notes: { top: 'Sen trắng, Cam bergamot', heart: 'Trầm hương, Hoa nhài', base: 'Xạ hương, Gỗ đàn hương' },
    longevity: 5, sillage: 4, rating: 4.9, reviews: 128, sold: 2400, category: 'floral'
  },
  {
    id: '2', brand: 'SIGNATURE', name: 'Emerald Forest', price: 1890000,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCx78UoM6F_1ofbVzdNu37jXobfvgm6uRfxolVROpRuBwfrfYAvmCUx3-KMYwulj9vklaNr24d4vkRb-AtjkdD_IufQf0SkQGdp4Ai-H6eE4CpGnlyF3PQ8pglJgYuHx_vf7ts5z5ghyRX4dAq994DrXlh9GLGZkyKJZ0FY8HYmfgE0tgEzY0GOIAbu29LDEnzYvnGjClO8a71ngnoAu4zaJj0bW9m5eSjtyobqSJUYOPwgx3wUtamGdGYuIT6tw-AIBVJ_VqGmYGk',
    description: 'Hương rừng xanh mát lành, tươi mới như buổi sáng sớm.',
    notes: { top: 'Lá xanh, Bạch đàn', heart: 'Gỗ tuyết tùng, Vetiver', base: 'Rêu, Hổ phách xanh' },
    longevity: 4, sillage: 3, rating: 4.7, reviews: 95, sold: 1800, category: 'woody'
  },
  {
    id: '3', brand: 'LUXE SCENT', name: 'Golden Amber Oud', price: 3200000,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABPOa9hmKgrGelP-3FdRJzcvrwAGTIueXlgyvIuyLNSAjjK3bsYowf98eg7qh4DKsVm4GR-Y3_-qKrbU1cZF4gAYAhicqXbFFJE1nYKHTNJZljRlHyUd2LICANjTMzd-OW16FeLJdJEW0XaSh9spCTLFF8RNQIDrT0G1iwccDH9kTt8pCgFdeofkYNzHTMijAZd2aJdHGED1HPfcTgWDFiBLWM23psdooo8q8M-mXQlClmDZYyzeEkFV81LR_Ft8VK0MIWuejcK1M',
    description: 'Trầm hương vàng kết hợp hổ phách quý hiếm từ Trung Đông.',
    notes: { top: 'Hồng tiêu, Nghệ tây', heart: 'Trầm hương, Hoa hồng', base: 'Hổ phách, Xạ hương vàng' },
    longevity: 5, sillage: 5, rating: 4.8, reviews: 210, sold: 3100, category: 'oriental'
  },
  {
    id: '4', brand: 'EXCLUSIVE', name: 'Velvet Rose Musk', price: 2100000,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiRIw3DU1WfTkHGVloiznpaoXlJ2WetbArCTRIumatgmpsf1tGrzWf5cmt2ektEgKuJp02tpcYzS77617jWFtpUI-9u1W9jVt3N35wpGjiaKp1Bhif6WoJiU8Hp68cKbgEyBKqfuTYQJvYMgYmDyG1WHlCcUOpUWxZP1TfFxqvdzEV9Dj15njlfo-uZX5GZF7k9mkZC8MHDEZ1LJPwnmQPLqQwbGTjhsd_EtC0KyBKCJvePYtBgstmTXH4b5CsbzL1mXJgHqFCI48',
    description: 'Hoa hồng nhung mềm mại hòa quyện xạ hương ấm áp.',
    notes: { top: 'Hoa hồng, Quả lý chua', heart: 'Hoa mẫu đơn, Iris', base: 'Xạ hương trắng, Gỗ đàn hương' },
    longevity: 4, sillage: 4, rating: 4.6, reviews: 175, sold: 2200, category: 'floral'
  },
  {
    id: '5', brand: 'Maison Francis', name: 'Baccarat Rouge 540', price: 7250000, oldPrice: 8500000, badge: 'Bán Chạy',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvfo0izCJIOBN2IsEowOeZdYPNhU4vSU7s8YthDbh5s8w6Stge3IXiOw3g6H7XgjwXRlZ6SJ_ApVufcR1OkPhW7S0yLh9DDPrlkoWEnGBJUoCUn16aI_iEQheZnrHo2bsXBKkx-oKCCHR1CYuWlIlnF74uRlcxS2nDpigNhahoEZcDF5fr92GEsAZ7NW1yTlv_TShXe8JplrUn0-Y6x4zUIyb2WsqQukDxF4LIpoEt4tGVDtsxts932Mu1r7BtV2q3Up0oSSRHOrs',
    description: 'Huyền thoại nước hoa hiện đại, biểu tượng của sự sang trọng.',
    notes: { top: 'Nghệ tây, Grapefruit', heart: 'Hoa nhài, Ambroxan', base: 'Gỗ tuyết tùng, Xạ hương' },
    longevity: 5, sillage: 5, rating: 5.0, reviews: 512, sold: 8900, category: 'oriental'
  },
  {
    id: '6', brand: 'Byredo', name: "Rose of No Man's Land", price: 5400000,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbG5XoPbMYgPIgD2v6761BwIs5bACgl5QokCVYgsIjL4FX-oKfbvaTtkBuNuZXjF4D2ZvM51u9naq-1Xd61uz6cWG2p1Jp6fQl8klwEyMby5-M16RvFT_VxXUg7elhclvVOmKnACUU2jdFpSoCNZYQh77jGZtGSeweGWnVACru5oxhZ6QdYw2YFn5ZBbn-1zvOp1MF1iRLFy47myGb7tw_Idy32m0VIADYz2tN42Zfp-eH6GzeKtSOOhRgj6mGkLHKbF2xD604w_8',
    description: 'Hoa hồng hoang dã, tinh tế và đầy cảm xúc.',
    notes: { top: 'Hoa hồng Thổ Nhĩ Kỳ, Raspberry', heart: 'Hoa hồng, Hoa mẫu đơn', base: 'Papyrus, Xạ hương' },
    longevity: 4, sillage: 4, rating: 4.8, reviews: 320, sold: 4500, category: 'floral'
  },
  {
    id: '7', brand: 'Le Labo', name: 'Santal 33', price: 6800000, badge: 'Mới',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBosI7ArrnqqARANaGDCWebU7gaFNIieMwTjIRSN0a5RyNwGbd2Q1hgSs0yY-L__d3jJBY7pYM32kwwHX0rJzd44ggh9_p34KIZ1DO7Z_5tjnCdQueSKamvqBoOaYiTFQCWkCwv2yT-8YglUCYnNRMULLF19LBwvApCubNw01OUR19x0H4apsxrPpp_hX0uzCRw_18BCeAgXwsB--BFjkxvjAeGlpfcUVuXKFZc0NE8KSqLScuBiiVg3L2Zjik2DbKieh2BFxsgUOM',
    description: 'Gỗ đàn hương huyền thoại, mùi hương unisex được yêu thích nhất thế giới.',
    notes: { top: 'Violet, Cardamom', heart: 'Iris, Ambrette', base: 'Gỗ đàn hương, Xạ hương, Da thuộc' },
    longevity: 5, sillage: 4, rating: 4.9, reviews: 445, sold: 6700, category: 'woody'
  },
  {
    id: '8', brand: 'Dior', name: 'Sauvage Elixir', price: 4200000, oldPrice: 4800000,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEgtz62pFHwkyFtx5j_7C3cjTDUeDzPQIgoRsuC-IJJTdo2Y021N8F52vjEmMFyJFwVQ3OrTUkSTUn2taX9M1tVTpULJCEBKAcoE8WidJWAxprUKyQjRJjkqhuBByhCZDRwT2gk21xu2boCmPSPPJ2SU8ghgAmUl3YY9m4EN__1ep461CBeZmd9p18OVWfaz1LzNQ7pWHUPXReOUJ-S9pLlBuW0aHpeAeafbww_jL4q2sQmm2Z64p-Koe0EaiCjlTyJoHxnudaj6Y',
    description: 'Sức mạnh hoang dã của thiên nhiên, dành cho người đàn ông tự do.',
    notes: { top: 'Cam bergamot, Hồng tiêu', heart: 'Lavender, Geranium', base: 'Ambroxan, Gỗ đàn hương' },
    longevity: 5, sillage: 5, rating: 4.7, reviews: 389, sold: 5600, category: 'woody'
  },
  {
    id: '9', brand: 'Tom Ford', name: 'Tobacco Vanille', price: 8150000,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBElv6iJzFLpTU-he1EQWiCut9yuNb7t3WZEGXOfF1pmqyIbVJdB36tOKtW8D9C9wPqxvZe6nW0f1cJ-tPz7qIpgB-_KYLG7hVXaeixBreHKR7CG9WD2TrN85FKkRTd9hIGlpW7WkZk-W1tqwXj3wLOMyz9Ggt5Km-mkO0eT4Lyn6InLqFtBL-kXKaE-IMQKHcsvN9Zdnw2eZs-zmtorOg7J3psNFiUC0b7jKeKyAIoB-I1jgOxreh9h4PKr4w3BcUzHbAKoiJ1_MM',
    description: 'Thuốc lá và vani sang trọng, ấm áp và quyến rũ.',
    notes: { top: 'Thuốc lá, Gia vị', heart: 'Vani, Cacao', base: 'Gỗ đàn hương, Xạ hương' },
    longevity: 5, sillage: 5, rating: 4.9, reviews: 267, sold: 3800, category: 'oriental'
  },
  {
    id: '10', brand: 'Creed', name: 'Aventus', price: 9600000,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXkq6lNaGW57tH2D0yjJjO1Dd9PPjnve25Se81Zd6opEXEmdyv_guxV-ZXiRJdi1-ocIvvu2rI206_hKaqaZPRl3IXDOHR-7jBIF0bRkV7XzjzCzVPbkAIUrmQFBsfFDnx9LQjBnTAPQoPAh6Xn0cxRLbvbOEy8tgT-TwemS4LAMu37RB9QsgBgznL3JiOcsrBMPbv8snjZqCzxRDy55HMdtX0drSZilocpaWOGtOZUIg_svM6BXIqSB5Dph3RifBCIouMmy81BBcU',
    description: 'Biểu tượng của sự thành công và quyền lực.',
    notes: { top: 'Dứa, Cam bergamot, Táo đen', heart: 'Hoa nhài, Hoa hồng, Bạch dương', base: 'Xạ hương, Hổ phách, Gỗ đàn hương' },
    longevity: 5, sillage: 5, rating: 5.0, reviews: 634, sold: 11200, category: 'woody'
  }
];

export const COLLECTIONS = [
  {
    id: 'heritage',
    title: 'Heritage Collection',
    subtitle: 'Gói trọn linh hồn Việt Nam',
    description: 'Những dòng hương được chắt lọc từ tinh hoa thiên nhiên Việt Nam, kết hợp nghệ thuật chế tác truyền thống với kỹ thuật hiện đại.',
    brands: ['LUXE SCENT', 'EXCLUSIVE', 'SIGNATURE'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL14fiuJt210LBrq0xkxV6wFlMtDKmv7dnkUEvZJG1Zc9EMbfQeRT6JaKxF-rXRv6DRINeuRSyk01nyf5Ey3khvw7hUQnQKNGurt-ZVIEMhJ6jaVVCSrXhDJju-T_Dg788fVzPn7NTPXF1HgosWb9wOrSu0uHqbXY8v4sPdxo0JvIDGk1bmMr1LTBOtNU_Xm-1z8W5LZxfUYUwzgYqT8OcCCmpxKYs24dbZHujY1M8E8s5mLNXEtJZUJ2Iykgh6Cgn_ufxpB-XUfg'
  },
  {
    id: 'royal',
    title: 'Royal Signature',
    subtitle: 'Sự sang trọng vĩnh cửu',
    description: 'Tuyển chọn từ những nhà làm hương danh tiếng nhất thế giới — Maison Francis, Byredo, Le Labo, Dior. Mỗi chai là một tuyên ngôn về đẳng cấp.',
    brands: ['Maison Francis', 'Byredo', 'Le Labo', 'Dior'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDChwV92BNZKeec7bKWJaSKoh7JX3pGwxfjQsVpl6jy30dMu-TTdWV1VkU4OTCx5w9FsZjiBDIXvx72g2mc42A4tb6R35Qkfhdzu9eiC6tSxdsd1_pPJLkmcaZ7bvmvNZbDRwjtv0UuPB_k14KT_f2qHtz6jlT9txsIaTr9NxeJwpH4KXRNSIWaJYiRBc8TTG6enqLsaBsiKtSJnigsO87aENsPgqSIudyBlmCL4ARC34G4w_5txGoq6XaUHbV9mQUXCS8YymO1HS0'
  },
  {
    id: 'winter',
    title: 'Winter Noir',
    subtitle: 'Nốt hương đêm huyền bí',
    description: 'Tom Ford và Creed — hai biểu tượng của sự quyền lực và bí ẩn. Dành cho những ai muốn để lại dấu ấn không thể quên.',
    brands: ['Tom Ford', 'Creed'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFgUxejAs5ioDx1a8vczlAaO6qw9LdusEP99y7wU051djrrbRynD5kMUe14rJPYeB_TMSmQVHoJldzpHpiuH5AnjAR4VJfFwPp3hKbt1ETxQqlpcV2_gtGKeEz1BMtLZjEVdnEtLwvM9SrzdOuP9D_KooPd4SVLUaVAVPuHZbFmxjDfi77PUzsphRi5iszyDaCUWKCFnQduYZnA6G8Y9-RVXwqUszAHOS6q9ICrWho9wA2zzsP-fb2S01_6yAzOaeNjee8m_dhe1Q'
  }
];
