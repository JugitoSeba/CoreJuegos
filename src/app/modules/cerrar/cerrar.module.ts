import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CerrarRoutingModule } from './cerrar-routing.module';
import { CerrarComponent } from './pages/cerrar/cerrar.component';


@NgModule({
  declarations: [
    CerrarComponent
  ],
  imports: [
    CommonModule,
    CerrarRoutingModule
  ]
})
export class CerrarModule { }
