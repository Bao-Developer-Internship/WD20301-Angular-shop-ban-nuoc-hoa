import { Component } from '@angular/core';
import { ProductItem, Product } from '../product-item/product-item';

@Component({
  selector: 'app-home',
  imports: [ProductItem],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  bestSellers: Product[] = [
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
  ];
}
