import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from "./registro/registro.component"
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"registro",component:RegistroComponent
  },
  {
    path:"login",component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule{ }

