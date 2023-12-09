import { Component } from '@angular/core';
import { AuthService } from '../../../modules/auth/services/auth.service'; 

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component {
  constructor(public authService: AuthService) { }

  // Método para cerrar sesión
  async salir() {
   await this.authService.cerrarSesion();
   // Después de cerrar sesión, el servicio ya ha actualizado la propiedad usuarioLogueado
 }
}
