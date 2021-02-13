import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { LayoutBlankComponent } from './layouts/layout-blank/layout-blank.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { DataTablesModule } from 'angular-datatables';
import { ToastrModule } from 'ngx-toastr';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import 'hammerjs';
import { MSharesModule } from './m-shares/m-shares.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutBlankComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    LayoutsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTablesModule,
    HttpClientModule,
    MSharesModule.forRoot(),
    ToastrModule.forRoot(
      {
        timeOut: 1500,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      }
    ),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
    }),
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
