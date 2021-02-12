import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportProductsComponent } from './import-products/import-products.component';
import { ImportProductAddComponent } from './import-product-add/import-product-add.component';
import { ImportProductEditComponent } from './import-product-edit/import-product-edit.component';
import { ImportComponent } from './import/import.component';



@NgModule({
  declarations: [ImportProductsComponent, ImportProductAddComponent, ImportProductEditComponent, ImportComponent],
  imports: [
    CommonModule
  ]
})
export class ImportsModule { }
