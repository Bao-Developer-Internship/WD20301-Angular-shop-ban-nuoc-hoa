import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface WishlistItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  img: string;
}

@Component({
  selector: 'app-favorite',
  imports: [RouterLink],
  templateUrl: './favorite.html',
})
export class Favorite {
  items: WishlistItem[] = [
    { id: '1', name: 'Baccarat Rouge 540', brand: 'Maison Francis', price: 7250000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvfo0izCJIOBN2IsEowOeZdYPNhU4vSU7s8YthDbh5s8w6Stge3IXiOw3g6H7XgjwXRlZ6SJ_ApVufcR1OkPhW7S0yLh9DDPrlkoWEnGBJUoCUn16aI_iEQheZnrHo2bsXBKkx-oKCCHR1CYuWlIlnF74uRlcxS2nDpigNhahoEZcDF5fr92GEsAZ7NW1yTlv_TShXe8JplrUn0-Y6x4zUIyb2WsqQukDxF4LIpoEt4tGVDtsxts932Mu1r7BtV2q3Up0oSSRHOrs' },
    { id: '2', name: 'Santal 33', brand: 'Le Labo', price: 6800000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBosI7ArrnqqARANaGDCWebU7gaFNIieMwTjIRSN0a5RyNwGbd2Q1hgSs0yY-L__d3jJBY7pYM32kwwHX0rJzd44ggh9_p34KIZ1DO7Z_5tjnCdQueSKamvqBoOaYiTFQCWkCwv2yT-8YglUCYnNRMULLF19LBwvApCubNw01OUR19x0H4apsxrPpp_hX0uzCRw_18BCeAgXwsB--BFjkxvjAeGlpfcUVuXKFZc0NE8KSqLScuBiiVg3L2Zjik2DbKieh2BFxsgUOM' },
    { id: '3', name: 'Aventus', brand: 'Creed', price: 9600000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXkq6lNaGW57tH2D0yjJjO1Dd9PPjnve25Se81Zd6opEXEmdyv_guxV-ZXiRJdi1-ocIvvu2rI206_hKaqaZPRl3IXDOHR-7jBIF0bRkV7XzjzCzVPbkAIUrmQFBsfFDnx9LQjBnTAPQoPAh6Xn0cxRLbvbOEy8tgT-TwemS4LAMu37RB9QsgBgznL3JiOcsrBMPbv8snjZqCzxRDy55HMdtX0drSZilocpaWOGtOZUIg_svM6BXIqSB5Dph3RifBCIouMmy81BBcU' },
  ];

  remove(id: string) {
    this.items = this.items.filter(i => i.id !== id);
  }
}
