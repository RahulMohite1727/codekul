import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { UsertableComponent } from './usertable/usertable.component';
import { MatSortModule,MatTableModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UsertableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,  
    HttpClientModule,
  
    BrowserAnimationsModule,
    MatSortModule,MatTableModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
