import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CountryService } from './billing-add/country.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingAddComponent } from './billing-add/billing-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
