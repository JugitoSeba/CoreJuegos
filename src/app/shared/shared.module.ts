import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    Navbar2Component
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,

  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    Navbar2Component,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ]
})
export class SharedModule { }
