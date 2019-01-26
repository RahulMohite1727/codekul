import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultifileComponent } from './multifile/multifile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultifileService } from './multifile/multifile.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MultifileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
   
  ],
  providers: [MultifileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
