import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRoutingModule } from './detalle-routing.module';
import { DetalleComponent } from "./pages/detalle/detalle.component";


@NgModule({
  declarations: [
    DetalleComponent
  ],
  imports: [
    CommonModule,
    DetalleRoutingModule
  ]
})
export class DetalleModule { }
