import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TJumboComponent } from './t-jumbo/t-jumbo.component';
import { TCartComponent } from './t-cart/t-cart.component';
import { TFooterComponent } from './t-footer/t-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TJumboComponent,
    TCartComponent,
    TFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
