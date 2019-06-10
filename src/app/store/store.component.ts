import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
  selector: 'app_store',
  templateUrl: 'store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  constructor(private repository: ProductRepository) {}

  get products(): Product[] {
    return this.repository.getProducts('');
  }

  get categories(): String[] {
    return this.repository.getCategories();
  }
}
