import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../mocks/products.mock';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  products: Product[] = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(p: Product): void {
    console.log('product received', p);
    this.products.push(p);

    //
    //this.productList.addProduct();
  }

}
