import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WD20301-Angular-shop-ban-nuoc-hoa');
}
