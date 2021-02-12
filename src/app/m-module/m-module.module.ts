import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MModuleRoutingModule } from './m-module-routing.module';
import { LayoutComponent } from '../layouts/layout/layout.component';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MModuleRoutingModule
  ]
})
export class MModuleModule { }
