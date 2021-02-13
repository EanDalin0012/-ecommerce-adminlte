import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { ModalComponent } from './component/modal/modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule, SharedModule, DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { UploadsModule, UploadModule } from '@progress/kendo-angular-upload';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { AlertDialogComponent } from './component/alert-dialog/alert-dialog.component';

@NgModule({
  declarations: [ModalComponent, AlertDialogComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DialogModule,
    GridModule,
    LayoutModule,
    SharedModule,
    SortableModule,
    DropDownsModule,
    UploadsModule,
    PDFModule,
    DialogsModule,
    UploadModule,
    InputsModule,
    NotificationModule,
    SchedulerModule,
    PDFExportModule,
    ExcelExportModule,
    ChartsModule,
    DateInputsModule,
    ButtonsModule,
    ProgressBarModule,
  ],
  entryComponents: [
    ModalComponent,
  ],
  providers: [
    DatePipe,
  ]
})
export class MSharesModule {
  static forRoot(): ModuleWithProviders<MSharesModule> {
    return {
      ngModule: MSharesModule,
      providers: []
    };
  }
}
