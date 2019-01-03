import { RegistrationComponent } from './registration/registration.component';
import { UsertableComponent } from './usertable/usertable.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'usertabel',component: UsertableComponent},
  {path: 'reg',component: RegistrationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
