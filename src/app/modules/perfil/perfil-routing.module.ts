import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DatosComponent } from './pages/datos/datos.component';
import { SeguridadComponent } from './pages/seguridad/seguridad.component';

const routes: Routes = [
  {
    path:"",component:PerfilComponent
  },
  {
    path:"datos",component:DatosComponent
  },
  {
    path:"seguridad",component:SeguridadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
