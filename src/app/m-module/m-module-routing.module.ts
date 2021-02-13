import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from '../layouts/layout/layout.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: '',
    children: [
      {path: '', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      {path: 'import', loadChildren: './imports/imports.module#imports.module'},
      {path: 'register', loadChildren: './registers/registers.module#RegistersModule'},
      {path: 'management', loadChildren: './carts/carts.module#CartsModule'},
      {path: 'notification', loadChildren: './notification/notification.module#NotificationModule'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MModuleRoutingModule {
}
