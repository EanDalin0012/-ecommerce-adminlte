import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { ModalComponent } from './component/modal/modal.component';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    DataTablesModule
  ]
})
export class MSharesModule {
}
