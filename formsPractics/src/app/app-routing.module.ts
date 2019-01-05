
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataformsComponent } from './myforms/dataforms/dataforms.component';

const routes: Routes = [
{ path: 'dataform' , component: DataformsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
