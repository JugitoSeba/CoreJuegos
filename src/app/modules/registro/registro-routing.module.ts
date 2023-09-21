import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from "./pages/registro/registro.component";

const routes: Routes = [
  {
    path:"",component:RegistroComponent
  },
  {
    path:"registro",component:RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
