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
    path:"",loadChildren:()=>import('./modules/inicio2/inicio2.module').then(m=>m.Inicio2Module)
  },
  {
    path:"",loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:"",loadChildren:()=>import("./modules/search/search.module").then(m=>m.SearchModule)
  },
  {
    path:"",loadChildren:()=>import("./modules/search2/search2.module").then(m=>m.Search2Module)
  },
  {
    path:"",loadChildren:()=>import("./modules/perfil/perfil.module").then(m=>m.PerfilModule)
  },
  {
    path:"",loadChildren:()=>import("./modules/admin/admin.module").then(m=>m.AdminModule)
  },
  {
    path:"",loadChildren:()=>import("./modules/cerrar/cerrar.module").then(m=>m.CerrarModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
