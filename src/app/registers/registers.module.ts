import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { ProductsComponent } from './products/products.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { VendorsComponent } from './vendors/vendors.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { CategorysComponent } from './categorys/categorys.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailEditComponent } from './product-detail-edit/product-detail-edit.component';
import { ProductDetailAddComponent } from './product-detail-add/product-detail-add.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    CategoryAddComponent,
    CategoryEditComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent,
    VendorsComponent,
    VendorAddComponent,
    VendorEditComponent,
    CategorysComponent,
    ProductDetailsComponent,
    ProductDetailEditComponent,
    ProductDetailAddComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegistersModule { }
