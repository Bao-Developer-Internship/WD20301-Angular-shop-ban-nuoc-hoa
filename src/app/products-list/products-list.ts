import { Component } from '@angular/core';
import { ProductItem, Product } from '../product-item/product-item';

@Component({
  selector: 'app-products-list',
  imports: [ProductItem],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  products: Product[] = [
    {
      brand: 'Maison Francis',
      name: 'Baccarat Rouge 540',
      price: '7.250.000đ',
      oldPrice: '8.500.000đ',
      badge: 'Bán Chạy',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvfo0izCJIOBN2IsEowOeZdYPNhU4vSU7s8YthDbh5s8w6Stge3IXiOw3g6H7XgjwXRlZ6SJ_ApVufcR1OkPhW7S0yLh9DDPrlkoWEnGBJUoCUn16aI_iEQheZnrHo2bsXBKkx-oKCCHR1CYuWlIlnF74uRlcxS2nDpigNhahoEZcDF5fr92GEsAZ7NW1yTlv_TShXe8JplrUn0-Y6x4zUIyb2WsqQukDxF4LIpoEt4tGVDtsxts932Mu1r7BtV2q3Up0oSSRHOrs',
    },
    {
      brand: 'Byredo',
      name: "Rose of No Man's Land",
      price: '5.400.000đ',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbG5XoPbMYgPIgD2v6761BwIs5bACgl5QokCVYgsIjL4FX-oKfbvaTtkBuNuZXjF4D2ZvM51u9naq-1Xd61uz6cWG2p1Jp6fQl8klwEyMby5-M16RvFT_VxXUg7elhclvVOmKnACUU2jdFpSoCNZYQh77jGZtGSeweGWnVACru5oxhZ6QdYw2YFn5ZBbn-1zvOp1MF1iRLFy47myGb7tw_Idy32m0VIADYz2tN42Zfp-eH6GzeKtSOOhRgj6mGkLHKbF2xD604w_8',
    },
    {
      brand: 'Le Labo',
      name: 'Santal 33',
      price: '6.800.000đ',
      badge: 'Mới',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBosI7ArrnqqARANaGDCWebU7gaFNIieMwTjIRSN0a5RyNwGbd2Q1hgSs0yY-L__d3jJBY7pYM32kwwHX0rJzd44ggh9_p34KIZ1DO7Z_5tjnCdQueSKamvqBoOaYiTFQCWkCwv2yT-8YglUCYnNRMULLF19LBwvApCubNw01OUR19x0H4apsxrPpp_hX0uzCRw_18BCeAgXwsB--BFjkxvjAeGlpfcUVuXKFZc0NE8KSqLScuBiiVg3L2Zjik2DbKieh2BFxsgUOM',
    },
    {
      brand: 'Dior',
      name: 'Sauvage Elixir',
      price: '4.200.000đ',
      oldPrice: '4.800.000đ',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEgtz62pFHwkyFtx5j_7C3cjTDUeDzPQIgoRsuC-IJJTdo2Y021N8F52vjEmMFyJFwVQ3OrTUkSTUn2taX9M1tVTpULJCEBKAcoE8WidJWAxprUKyQjRJjkqhuBByhCZDRwT2gk21xu2boCmPSPPJ2SU8ghgAmUl3YY9m4EN__1ep461CBeZmd9p18OVWfaz1LzNQ7pWHUPXReOUJ-S9pLlBuW0aHpeAeafbww_jL4q2sQmm2Z64p-Koe0EaiCjlTyJoHxnudaj6Y',
    },
    {
      brand: 'Tom Ford',
      name: 'Tobacco Vanille',
      price: '8.150.000đ',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBElv6iJzFLpTU-he1EQWiCut9yuNb7t3WZEGXOfF1pmqyIbVJdB36tOKtW8D9C9wPqxvZe6nW0f1cJ-tPz7qIpgB-_KYLG7hVXaeixBreHKR7CG9WD2TrN85FKkRTd9hIGlpW7WkZk-W1tqwXj3wLOMyz9Ggt5Km-mkO0eT4Lyn6InLqFtBL-kXKaE-IMQKHcsvN9Zdnw2eZs-zmtorOg7J3psNFiUC0b7jKeKyAIoB-I1jgOxreh9h4PKr4w3BcUzHbAKoiJ1_MM',
    },
    {
      brand: 'Creed',
      name: 'Aventus',
      price: '9.600.000đ',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXkq6lNaGW57tH2D0yjJjO1Dd9PPjnve25Se81Zd6opEXEmdyv_guxV-ZXiRJdi1-ocIvvu2rI206_hKaqaZPRl3IXDOHR-7jBIF0bRkV7XzjzCzVPbkAIUrmQFBsfFDnx9LQjBnTAPQoPAh6Xn0cxRLbvbOEy8tgT-TwemS4LAMu37RB9QsgBgznL3JiOcsrBMPbv8snjZqCzxRDy55HMdtX0drSZilocpaWOGtOZUIg_svM6BXIqSB5Dph3RifBCIouMmy81BBcU',
    },
  ];
}
