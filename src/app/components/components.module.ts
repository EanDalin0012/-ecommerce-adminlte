import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatablesComponent } from './datatables/datatables.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    DatatablesComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    DataTablesModule,
  ]
})
export class ComponentsModule {
  constructor() {
    console.log('ComponentsModule');

  }
}
