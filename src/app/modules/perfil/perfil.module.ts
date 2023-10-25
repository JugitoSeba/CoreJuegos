import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DatosComponent } from './pages/datos/datos.component';
import { SeguridadComponent } from './pages/seguridad/seguridad.component';


@NgModule({
  declarations: [
    PerfilComponent,
    DatosComponent,
    SeguridadComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    SharedModule
  ]
})
export class PerfilModule { }
