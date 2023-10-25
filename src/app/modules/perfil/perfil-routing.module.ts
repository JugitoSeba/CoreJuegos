import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DatosComponent } from './pages/datos/datos.component';

const routes: Routes = [
  {
    path:"",component:PerfilComponent
  },
  {
    path:"datos",component:DatosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
