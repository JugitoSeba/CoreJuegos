import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// VISTA
import { AdminComponent } from './pages/admin/admin.component';

// COMPONENTE
import { TableComponent } from './components/table/table.component';

// ARCHIVO DE RUTAS
import { AdminRoutingModule } from './admin-routing.module';

// MATERIAL
import { MatIconModule } from '@angular/material/icon';

// ANGULAR
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AdminComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[
    AdminComponent,
    TableComponent,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
