import { Component, inject, ElementRef, ViewChild } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-featured-collections',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './featured-collections.html',
})
export class FeaturedCollections {
  private productService = inject(ProductService);
  collections$ = this.productService.getCollections();

  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;

  scroll(dir: 'left' | 'right') {
    const el = this.slider?.nativeElement;
    if (el) el.scrollBy({ left: dir === 'left' ? -470 : 470, behavior: 'smooth' });
  }
}
