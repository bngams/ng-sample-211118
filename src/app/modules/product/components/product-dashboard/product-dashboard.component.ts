import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../mocks/products.mock';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit, AfterViewInit {
  products: Product[] = PRODUCTS;

  @ViewChild(ProductListComponent)
  productListComponent: ProductListComponent = {} as ProductListComponent;

  // @ViewChild(ProductListComponent)
  // set productListComponent(component: ProductListComponent) {
  //   this.productListComponent = component;
  // }

  constructor() { }

  // lifecycle hooks OnInit
  ngOnInit(): void {
    // NOT WORKING BECAUSE ITS AN @ChildView => AfterViewInit
    // this.productListComponent.products = PRODUCTS;
  }

  // lifecycle hooks AfterViewInit
  ngAfterViewInit(): void {
    console.log(
      'My productListComponent attribute is ready to use',
      this.productListComponent
    );
    this.productListComponent.products = PRODUCTS;
  }

  addProduct(p: Product): void {
    console.log('product received', p);
    this.products.push(p);
  }

  addProductToProductList(p: Product): void {
    console.log('product received', p);
    this.productListComponent.products.push(p);
  }

}
