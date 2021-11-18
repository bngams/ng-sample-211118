import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatInputModule,
  MatButtonModule
]

@NgModule({
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class MaterialModule { }
