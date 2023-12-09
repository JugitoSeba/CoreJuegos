import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../modules/auth/services/auth.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public authService: AuthService) { }

   // Método para cerrar sesión
   async salir() {
    await this.authService.cerrarSesion();
    // Después de cerrar sesión, el servicio ya ha actualizado la propiedad usuarioLogueado
  }
}
