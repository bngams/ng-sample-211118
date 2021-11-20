import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

/**
 * My doc
 */
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // products from parent with input
  @Input()
  productsInput: Product[] = [];

  // local products attribute
  products: Product[] = [];

  // products from API
  apiProducts: Product[] = [];

  // attribute! <=> no aassignment
  $apiProductsObservable!: Observable<Product[]>;

  // DI (dependency Injection)
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.initProducts();
    this.initProductsObservable();
  }

  initProducts(): void {
    this.productService.getProducts().subscribe(
      res => this.apiProducts = res
    )
  }

  initProductsObservable(): void {
    this.$apiProductsObservable = this.productService.getProducts();
  }

}
