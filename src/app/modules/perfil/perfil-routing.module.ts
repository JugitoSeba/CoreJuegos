import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DatosComponent } from './pages/datos/datos.component';
import { SeguridadComponent } from './pages/seguridad/seguridad.component';
import { DireccionComponent } from './pages/direccion/direccion.component';
import { PagosComponent } from './pages/pagos/pagos.component';

const routes: Routes = [
  {
    path:"",component:PerfilComponent
  },
  {
    path:"datos",component:DatosComponent
  },
  {
    path:"seguridad",component:SeguridadComponent
  },
  {
    path:"direccion",component:DireccionComponent
  },
  {
    path:"pagos",component:PagosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
