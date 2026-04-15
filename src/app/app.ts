import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { filter } from 'rxjs/operators';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  isAdminOrAuth = signal(false);
  private themeService = inject(ThemeService);

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      const url: string = e.urlAfterRedirects || e.url;
      this.isAdminOrAuth.set(url.startsWith('/admin') || url.startsWith('/login'));
    });
  }

  ngOnInit() {
    // Apply saved theme on startup
    this.themeService.applyToDOM();
  }
}
