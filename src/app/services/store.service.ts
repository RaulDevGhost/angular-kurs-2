import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private shopingCart: Product[] = [];

  constructor() {}

  addProduct(product: Product) {
    this.shopingCart.push(product);
  }

  getShoppingCart() {
    return this.shopingCart;
  }

  getTotal() {
    return this.shopingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
