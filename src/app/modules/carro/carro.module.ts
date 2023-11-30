import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarroRoutingModule } from './carro-routing.module';
import { CarroComponent } from './pages/carro/carro.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    CarroComponent
  ],
  imports: [
    CommonModule,
    CarroRoutingModule,
    SharedModule
  ]
})
export class CarroModule { }
