import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  {
    path:"",component: InicioComponent
  },
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"auth",loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:"busqueda",loadChildren:()=>import("./modules/busqueda/busqueda.module").then(m=>m.BusquedaModule)
  },
  {
    path:"perfil",loadChildren:()=>import("./modules/perfil/perfil.module").then(m=>m.PerfilModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
