import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { DetalleComponent } from '../detalle/pages/detalle/detalle.component';

const routes: Routes = [
  {
    path:"",component:SearchComponent
  },
  {
    path:"detalle",component:DetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
