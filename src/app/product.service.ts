import { Injectable } from '@angular/core';
import { Product } from './product-item/product-item';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private allProducts: Product[] = [
    {
      brand: 'LUXE SCENT',
      name: 'Imperial Lotus Extrait',
      price: '2.450.000₫',
      badge: 'New',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiFu1XaVq-BfotVaGW61hyNQ4aKvHAd4brGaY1pLih3Krx27Lj2xt62BbZWE1G7sTlUWGb8CEHUDMxgeR0s7ONTYUPzfLt9Ac2CWIBKx7Ere0axsxyjT2imbEHyZM82kW91DdV4l3tc2KJWy7OA34r8-e0lCDbuKLPXPWWhQCJT27wuLhbY2Hz9UOFQ2gdCQIRqThRi9Gry0HgQQ0UeFUI4S94gocwkZioZjMBoZspBM0n8yq7wMd4wv9Tv4qeC7puRBZaSBKzpg0',
    },
    {
      brand: 'SIGNATURE',
      name: 'Emerald Forest',
      price: '1.890.000₫',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCx78UoM6F_1ofbVzdNu37jXobfvgm6uRfxolVROpRuBwfrfYAvmCUx3-KMYwulj9vklaNr24d4vkRb-AtjkdD_IufQf0SkQGdp4Ai-H6eE4CpGnlyF3PQ8pglJgYuHx_vf7ts5z5ghyRX4dAq994DrXlh9GLGZkyKJZ0FY8HYmfgE0tgEzY0GOIAbu29LDEnzYvnGjClO8a71ngnoAu4zaJj0bW9m5eSjtyobqSJUYOPwgx3wUtamGdGYuIT6tw-AIBVJ_VqGmYGk',
    },
    {
      brand: 'LUXE SCENT',
      name: 'Golden Amber Oud',
      price: '3.200.000₫',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABPOa9hmKgrGelP-3FdRJzcvrwAGTIueXlgyvIuyLNSAjjK3bsYowf98eg7qh4DKsVm4GR-Y3_-qKrbU1cZF4gAYAhicqXbFFJE1nYKHTNJZljRlHyUd2LICANjTMzd-OW16FeLJdJEW0XaSh9spCTLFF8RNQIDrT0G1iwccDH9kTt8pCgFdeofkYNzHTMijAZd2aJdHGED1HPfcTgWDFiBLWM23psdooo8q8M-mXQlClmDZYyzeEkFV81LR_Ft8VK0MIWuejcK1M',
    },
    {
      brand: 'EXCLUSIVE',
      name: 'Velvet Rose Musk',
      price: '2.100.000₫',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiRIw3DU1WfTkHGVloiznpaoXlJ2WetbArCTRIumatgmpsf1tGrzWf5cmt2ektEgKuJp02tpcYzS77617jWFtpUI-9u1W9jVt3N35wpGjiaKp1Bhif6WoJiU8Hp68cKbgEyBKqfuTYQJvYMgYmDyG1WHlCcUOpUWxZP1TfFxqvdzEV9Dj15njlfo-uZX5GZF7k9mkZC8MHDEZ1LJPwnmQPLqQwbGTjhsd_EtC0KyBKCJvePYtBgstmTXH4b5CsbzL1mXJgHqFCI48',
    },
    {
      brand: 'Maison Francis',
      name: 'Baccarat Rouge 540',
      price: '7.250.000₫',
      oldPrice: '8.500.000₫',
      badge: 'Bán Chạy',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvfo0izCJIOBN2IsEowOeZdYPNhU4vSU7s8YthDbh5s8w6Stge3IXiOw3g6H7XgjwXRlZ6SJ_ApVufcR1OkPhW7S0yLh9DDPrlkoWEnGBJUoCUn16aI_iEQheZnrHo2bsXBKkx-oKCCHR1CYuWlIlnF74uRlcxS2nDpigNhahoEZcDF5fr92GEsAZ7NW1yTlv_TShXe8JplrUn0-Y6x4zUIyb2WsqQukDxF4LIpoEt4tGVDtsxts932Mu1r7BtV2q3Up0oSSRHOrs',
    },
    {
      brand: 'Byredo',
      name: "Rose of No Man's Land",
      price: '5.400.000₫',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbG5XoPbMYgPIgD2v6761BwIs5bACgl5QokCVYgsIjL4FX-oKfbvaTtkBuNuZXjF4D2ZvM51u9naq-1Xd61uz6cWG2p1Jp6fQl8klwEyMby5-M16RvFT_VxXUg7elhclvVOmKnACUU2jdFpSoCNZYQh77jGZtGSeweGWnVACru5oxhZ6QdYw2YFn5ZBbn-1zvOp1MF1iRLFy47myGb7tw_Idy32m0VIADYz2tN42Zfp-eH6GzeKtSOOhRgj6mGkLHKbF2xD604w_8',
    },
    {
      brand: 'Le Labo',
      name: 'Santal 33',
      price: '6.800.000₫',
      badge: 'Mới',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBosI7ArrnqqARANaGDCWebU7gaFNIieMwTjIRSN0a5RyNwGbd2Q1hgSs0yY-L__d3jJBY7pYM32kwwHX0rJzd44ggh9_p34KIZ1DO7Z_5tjnCdQueSKamvqBoOaYiTFQCWkCwv2yT-8YglUCYnNRMULLF19LBwvApCubNw01OUR19x0H4apsxrPpp_hX0uzCRw_18BCeAgXwsB--BFjkxvjAeGlpfcUVuXKFZc0NE8KSqLScuBiiVg3L2Zjik2DbKieh2BFxsgUOM',
    },
    {
      brand: 'Dior',
      name: 'Sauvage Elixir',
      price: '4.200.000₫',
      oldPrice: '4.800.000₫',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEgtz62pFHwkyFtx5j_7C3cjTDUeDzPQIgoRsuC-IJJTdo2Y021N8F52vjEmMFyJFwVQ3OrTUkSTUn2taX9M1tVTpULJCEBKAcoE8WidJWAxprUKyQjRJjkqhuBByhCZDRwT2gk21xu2boCmPSPPJ2SU8ghgAmUl3YY9m4EN__1ep461CBeZmd9p18OVWfaz1LzNQ7pWHUPXReOUJ-S9pLlBuW0aHpeAeafbww_jL4q2sQmm2Z64p-Koe0EaiCjlTyJoHxnudaj6Y',
    },
    {
      brand: 'Tom Ford',
      name: 'Tobacco Vanille',
      price: '8.150.000₫',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBElv6iJzFLpTU-he1EQWiCut9yuNb7t3WZEGXOfF1pmqyIbVJdB36tOKtW8D9C9wPqxvZe6nW0f1cJ-tPz7qIpgB-_KYLG7hVXaeixBreHKR7CG9WD2TrN85FKkRTd9hIGlpW7WkZk-W1tqwXj3wLOMyz9Ggt5Km-mkO0eT4Lyn6InLqFtBL-kXKaE-IMQKHcsvN9Zdnw2eZs-zmtorOg7J3psNFiUC0b7jKeKyAIoB-I1jgOxreh9h4PKr4w3BcUzHbAKoiJ1_MM',
    },
    {
      brand: 'Creed',
      name: 'Aventus',
      price: '9.600.000₫',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXkq6lNaGW57tH2D0yjJjO1Dd9PPjnve25Se81Zd6opEXEmdyv_guxV-ZXiRJdi1-ocIvvu2rI206_hKaqaZPRl3IXDOHR-7jBIF0bRkV7XzjzCzVPbkAIUrmQFBsfFDnx9LQjBnTAPQoPAh6Xn0cxRLbvbOEy8tgT-TwemS4LAMu37RB9QsgBgznL3JiOcsrBMPbv8snjZqCzxRDy55HMdtX0drSZilocpaWOGtOZUIg_svM6BXIqSB5Dph3RifBCIouMmy81BBcU',
    },
  ];

  getBestSellers(limit = 4): Product[] {
    return this.allProducts.slice(0, limit);
  }

  getAll(): Product[] {
    return this.allProducts;
  }
}
