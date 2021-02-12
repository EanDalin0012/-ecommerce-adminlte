import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layouts/layout/layout.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '',              loadChildren: './products/products.module#ProductsModule'},
      {path: 'account',       loadChildren: './accounts/accounts.module#AccountsModule'},
      {path: 'sales',         loadChildren: './sales/sales.module#SalesModule'},
      {path: 'cart',          loadChildren: './carts/carts.module#CartsModule'},
      {path: 'notification',  loadChildren: './notification/notification.module#NotificationModule'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MModuleRoutingModule { }
