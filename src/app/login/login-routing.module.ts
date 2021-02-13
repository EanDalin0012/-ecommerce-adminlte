import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutBlankComponent} from '../layouts/layout-blank/layout-blank.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: LoginComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
