import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  total = 0;
  productsFetchAll: Product[] = [];
  shopingCart: Product[] = [];
  products: Product[] = [];

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.shopingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });
  }

  addingCart(product: Product) {
    if (!this.shopingCart.includes(product)) {
      this.storeService.addProduct(product);
      this.total = this.storeService.getTotal();
      //this.shopingCart.push(product);
      //this.total += product.price;
      //this.total = this.shopingCart.reduce((sum, item) => sum + item.price, 0);
    }
    console.log(this.total, this.shopingCart);
  }
}
