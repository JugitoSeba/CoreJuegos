import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { SharedModule } from "src/app/shared/shared.module";
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    BusquedaRoutingModule,
    SharedModule,
    MatGridListModule
  ]
})
export class BusquedaModule { }
