import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {LayoutBlankComponent} from '../layouts/layout-blank/layout-blank.component';
import {LoginRoutingModule} from './login-routing.module';
import { MSharesModule } from '../m-shares/m-shares.module';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MSharesModule
  ]
})
export class LoginModule {
}
