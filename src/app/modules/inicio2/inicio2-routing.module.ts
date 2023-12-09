import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio2Component } from "./pages/inicio2/inicio2.component";

const routes: Routes = [
  {
    path:"",component:Inicio2Component
  },
  {
    path:"inicio2",component:Inicio2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Inicio2RoutingModule { }
