import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryStateComponent } from './country-state/country-state.component';

const routes: Routes = [
  { path:'state', component:CountryStateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
