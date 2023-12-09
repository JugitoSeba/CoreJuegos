import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true; // esto es del input

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    email: '',
    contrasena: ''
  }

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public router: Router
  ){}

  // llamamos función para INICIAR SESIÓN
  async iniciar(){
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    };

    const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.contrasena)
    // MÉTODO THEN -> CUANDO FUNCIONA CORRECTAMENTE
    .then(res => {
      alert("Bienvenido.");
      console.log(credenciales.email);

      this.router.navigate(['/inicio']);
    })
    // MÉTODO THEN -> ENCAPSULA UN FALLO
    .catch(error => {
      alert("No se pudo iniciar sesion. \n"+error);

      console.log(credenciales.email);
    })
  }
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
