import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    SearchComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
