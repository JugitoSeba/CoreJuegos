import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlataformasComponent } from './pages/plataformas/plataformas.component';

const routes: Routes = [
  {
    path:"plataformas",component:PlataformasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlataformasRoutingModule { }
