import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LayoutBlankComponent } from './layouts/layout-blank/layout-blank.component';
import { Error404Component } from './errors/error404/error404.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'main', component: LayoutComponent, loadChildren: './m-module/m-module.module#MModuleModule'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
