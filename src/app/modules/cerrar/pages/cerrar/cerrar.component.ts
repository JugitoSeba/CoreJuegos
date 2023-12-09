import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-cerrar',
  templateUrl: './cerrar.component.html',
  styleUrls: ['./cerrar.component.css']
})
export class CerrarComponent {
  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public router: Router
  ){}

  // llamamos función para CERRAR SESIÓN
  async salir(){
    const res = await this.servicioAuth.cerrarSesion()
    .then(res => {
      alert("Ha cerrado sesión con éxito.");
      console.log(res);

      this.router.navigate(['/inicio']);
    })
  }
}
