import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatIconModule,MatMenuModule,MatCardModule,MatToolbarModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarModule, 
  WavesModule, 
  BadgeModule,
  BreadcrumbModule,
  ButtonsModule,
  CardsFreeModule,
  CarouselModule,
  ChartsModule,
  CheckboxModule,
  CollapseModule,
  DropdownModule,
  IconsModule,
  InputsModule,
  ModalModule,
  PopoverModule,
  TooltipModule,
  MDBBootstrapModule,} from 'angular-bootstrap-md';
import { CardsComponent } from './dashboard/cards/cards.component'



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,MatInputModule,MatCardModule,MatGridListModule,MatToolbarModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonsModule,
    CardsFreeModule,
    CarouselModule.forRoot(),
    ChartsModule,
    CheckboxModule,
    CollapseModule.forRoot(),
    DropdownModule.forRoot(),
    IconsModule,
    InputsModule.forRoot(),
    ModalModule.forRoot(),
    NavbarModule,
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    WavesModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
