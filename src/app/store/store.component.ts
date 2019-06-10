import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'Store',
  templateUrl: 'store.component.html'
})
export class StoreComponent implements OnInit {
  constructor(private repository: ProductRepository) {}

  ngOnInit() {}

  get products(): Product[] {
    return this.repository.getProducts();
  }

  get categories(): String[] {
    return this.repository.getCategories();
  }
}
