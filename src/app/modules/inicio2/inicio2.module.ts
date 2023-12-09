import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Inicio2RoutingModule } from './inicio2-routing.module';
import { Inicio2Component } from './pages/inicio2/inicio2.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Inicio2Component
  ],
  imports: [
    CommonModule,
    Inicio2RoutingModule,
    SharedModule
  ]
})
export class Inicio2Module { }
