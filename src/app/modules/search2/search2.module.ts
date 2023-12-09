import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Search2RoutingModule } from './search2-routing.module';
import { Search2Component } from './pages/search2/search2.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardPs4Component } from './components/card-ps4/card-ps4.component';
import { CardPs3Component } from './components/card-ps3/card-ps3.component';
import { CardXboxComponent } from './components/card-xbox/card-xbox.component';



@NgModule({
  declarations: [
    Search2Component,
    SharedModule,
    CardPs3Component,
    CardPs4Component,
    CardXboxComponent
  ],
  imports: [
    CommonModule,
    Search2RoutingModule
  ]
})
export class Search2Module { }
