import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404/error404.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [Error404Component, ErrorComponent],
  imports: [
    CommonModule
  ]
})
export class ErrorsModule { }
