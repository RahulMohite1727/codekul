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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsertableComponent } from './usertable/usertable.component';
import { MatSortModule,MatTableModule,  MatPaginatorModule,  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatPaginator } from '@angular/material';
import {NgbPaginationModule,NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';


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
    ReactiveFormsModule,
    HttpClientModule,
  
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    NgbPaginationModule,NgbAlertModule,

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
