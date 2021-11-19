import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  product: Product = {} as Product;

  // base form control fields
  // name = new FormControl();
  // price = new FormControl();

  // my form
  productForm: FormGroup = {} as FormGroup;

  @Output()
  productCreated = new EventEmitter<Product>();

  // dependency injection
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initFormWithFormBuilder();
  }

  initForm() {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl(),
    });
  }

  initFormWithFormBuilder() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]], // new FormControl(...)
      price: ['']
    })
  }

  submitNgForm(): void {
    console.log(this.product);
  }

  submitFormGroup(): void {
    if (this.productForm.valid) {
      this.productForm.markAsPending();
      console.log(this.productForm.value);
      this.productCreated.emit(this.productForm.value);
      this.productForm.reset();
    }
  }

}
