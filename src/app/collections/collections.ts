import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COLLECTIONS } from '../data/products.data';

@Component({
  selector: 'app-collections',
  imports: [RouterLink],
  templateUrl: './collections.html',
})
export class Collections {
  collections = COLLECTIONS;
}
