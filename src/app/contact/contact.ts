import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
})
export class Contact {
  form = { name: '', phone: '', email: '', message: '' };
  submitted = signal(false);

  submit() {
    if (!this.form.name || !this.form.phone || !this.form.email) return;
    this.submitted.set(true);
    this.form = { name: '', phone: '', email: '', message: '' };
    setTimeout(() => this.submitted.set(false), 4000);
  }
}
