import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [DashComponent, LeftMenuComponent, ContentContainerComponent, NavBarComponent, OrdersComponent,],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class DashModule { }