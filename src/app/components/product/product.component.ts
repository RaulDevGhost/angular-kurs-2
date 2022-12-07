import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {
    id: '',
    name: '',
    image: '',
    price: 0,
  };
  @Output() addProduct = new EventEmitter<Product>();
  test = 'testing';

  constructor() {}

  ngOnInit(): void {}

  addToCart(product: Product) {
    this.addProduct.emit(product);
  }
}
