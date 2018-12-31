import { MyHttpComponent } from './http/http.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { OrdersComponent } from './dash/orders/orders.component';



const dashRoutes = [
  {path : 'orders', component : OrdersComponent}
]
const routes: Routes = [
  {path:'login', component : LoginComponent}, 
  {path:'dash/:usNm', component : DashComponent, children : dashRoutes },
  {path:'http', component : MyHttpComponent},
  

  {path : '', redirectTo : 'login', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
