import { Component, inject } from '@angular/core';
import { FeaturedCollections } from '../featured-collections/featured-collections';
import { BestSellers } from '../best-sellers/best-sellers';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-home',
  imports: [FeaturedCollections, BestSellers],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  gallery = inject(GalleryService);
}
