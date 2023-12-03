import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardPs4Component } from './components/card-ps4/card-ps4.component';
import { CardPs3Component } from './components/card-ps3/card-ps3.component';


@NgModule({
  declarations: [
    SearchComponent,
    CardPs4Component,
    CardPs3Component
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
