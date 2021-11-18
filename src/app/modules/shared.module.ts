import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class SharedModule { }