import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CategorysComponent } from './categorys/categorys.component';
import { ProductsComponent } from './products/products.component';
import { VendorsComponent } from './vendors/vendors.component';

const routes: Routes = [
  {path: '', redirectTo: 'category', pathMatch: 'full'},
  {path: 'category', component: CategorysComponent},
  {path: 'product', component: ProductsComponent},
  {path: 'vendor', component: VendorsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistersRoutingModule {
}
