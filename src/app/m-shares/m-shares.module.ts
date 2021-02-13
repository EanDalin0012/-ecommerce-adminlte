import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { ModalComponent } from './component/modal/modal.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    TranslateModule
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
