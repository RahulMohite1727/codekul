import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BtCrdComponent } from './bt-crd/bt-crd.component';
import { BtJmbComponent } from './bt-jmb/bt-jmb.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MxCrdComponent } from './mx-crd/mx-crd.component';
import { IntrComComponent } from './intr-com/intr-com.component';
import { PrgBarComponent } from './intr-com/prg-bar.component';
import { BtnPnlComponent } from './intr-com/btn-pnl.component';
import { LocRefComponent } from './loc-ref/loc-ref.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BarRatingModule } from "ngx-bar-rating";




@NgModule({
  declarations: [
    AppComponent,
    BtCrdComponent,
    BtJmbComponent,
    DataBindingComponent,
    MxCrdComponent,
    IntrComComponent,
    PrgBarComponent,
    BtnPnlComponent,
    LocRefComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    NgbModule,
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
