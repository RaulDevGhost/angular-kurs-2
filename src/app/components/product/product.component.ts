import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    image: '',
    price: 0,
    category: '',
    rating: {
      count: 0,
      rate: 0,
    },
    title: '',
    description: '',
  };
  @Output() addProduct = new EventEmitter<Product>();
  today = new Date();

  constructor() {}

  ngOnInit(): void {}

  addToCart(product: Product) {
    this.addProduct.emit(product);
  }
}
