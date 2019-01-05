import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataformsComponent } from './dataforms/dataforms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDataService } from './user-data.service';


@NgModule({
  declarations: [DataformsComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [UserDataService],
})
export class MyformsModule { }
