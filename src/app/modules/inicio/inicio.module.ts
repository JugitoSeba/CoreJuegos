import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';  


@NgModule({
  declarations: [
    InicioComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,

  ]
})
export class InicioModule { }
