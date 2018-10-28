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
    
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
