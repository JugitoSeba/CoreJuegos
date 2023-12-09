import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CerrarComponent } from './pages/cerrar/cerrar.component';

const routes: Routes = [
  {
    path:"",component:CerrarComponent
  },
  {
    path:"cerrar",component:CerrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CerrarRoutingModule { }
