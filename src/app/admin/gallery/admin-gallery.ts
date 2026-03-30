import { Component, inject, signal } from '@angular/core';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';
import { FormsModule } from '@angular/forms';
import { GalleryService } from '../../gallery.service';

@Component({
  selector: 'app-admin-gallery',
  imports: [AdminSidebar, FormsModule],
  templateUrl: './admin-gallery.html',
})
export class AdminGallery {
  galleryService = inject(GalleryService);
  newUrl = signal('');
  saved = signal(false);

  addByUrl() {
    const url = this.newUrl().trim();
    if (!url) return;
    this.galleryService.addImage(url);
    this.newUrl.set('');
    this.showSaved();
  }

  onFileChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (!files) return;
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.galleryService.addImage(e.target?.result as string);
        this.showSaved();
      };
      reader.readAsDataURL(file);
    });
  }

  remove(index: number) { this.galleryService.removeImage(index); }
  reset() { this.galleryService.reset(); }

  private showSaved() {
    this.saved.set(true);
    setTimeout(() => this.saved.set(false), 2000);
  }
}
