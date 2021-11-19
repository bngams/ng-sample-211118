import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../../models/product';
import { PRODUCTS } from '../mocks/products.mock';

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

  constructor() { }

  ngOnInit(): void {
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.complete();
    });

    const observer = {
      next: (r: any) => console.log(r),
      complete: () => console.log('done')
    }

    // http.get => observable
    observable
      .pipe(
        map((r) => r + 'test')
      ).subscribe(observer);

    observable.subscribe((r: any) => console.log(r));
  }

}
