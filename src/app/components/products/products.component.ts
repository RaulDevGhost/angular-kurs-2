import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: '67cb2af45',
      name: 'Jim Morrisons book',
      image: './assets/images/book1.jpeg',
      price: 39,
    },
    {
      id: '62cb1af15',
      name: 'Beatles book',
      image: './assets/images/book2.jpeg',
      price: 29,
    },
    {
      id: '32cb6af2',
      name: 'Pink Floy book',
      image: './assets/images/book3.jpeg',
      price: 49,
    },
    {
      id: '18cf6ab1',
      name: 'Beastie Boys book',
      image: './assets/images/book4.jpeg',
      price: 29,
    },
    {
      id: '15cb3ab0',
      name: 'Metallica book',
      image: './assets/images/book5.jpeg',
      price: 48,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}