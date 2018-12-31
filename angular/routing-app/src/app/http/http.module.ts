import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MyHttpComponent } from './http.component';
@NgModule({
  declarations: [MyHttpComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class MyHttpModule {
}
