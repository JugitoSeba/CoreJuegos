import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { RegistroComponent } from "./modules/registro/pages/registro/registro.component"


const routes: Routes = [
  {
    path:"",component: InicioComponent
  },
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"registro",component:RegistroComponent
  },
  {
    path:"registro",loadChildren:()=>import('./modules/registro/registro.module').then(m=>m.RegistroModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
