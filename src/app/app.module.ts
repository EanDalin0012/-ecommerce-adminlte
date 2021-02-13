import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { LayoutBlankComponent } from './layouts/layout-blank/layout-blank.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { DataTablesModule } from 'angular-datatables';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
