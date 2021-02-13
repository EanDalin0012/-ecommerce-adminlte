import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'components', pathMatch: 'full'},
  {path: 'd', loadChildren: '../dashboard/dashboard.module#DashboardModule'},
  {path: 'import', loadChildren: '../imports/imports.module#imports.module'},
  {path: 'register', loadChildren: '../registers/registers.module#RegistersModule'},
  {path: 'management', loadChildren: '../carts/carts.module#CartsModule'},
  {path: 'notification', loadChildren: '../notification/notification.module#NotificationModule'},
  {path: 'components', loadChildren: '../components/components.module#ComponentsModule'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MModuleRoutingModule {
  constructor() {
    console.log('MModuleRoutingModule');
  }
}
