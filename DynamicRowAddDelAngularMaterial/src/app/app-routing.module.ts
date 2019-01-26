import { DyanmicRowAddDeleteComponent } from './dyanmic-row-add-delete/dyanmic-row-add-delete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'rows',component:DyanmicRowAddDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
