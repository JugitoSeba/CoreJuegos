import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  hide = true; // input de contraseña

  // definimos de forma pública el servicioAuth, servicioFirestore, servicio de ruteo
  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public router: Router
    ) { }

  // importación del modelo
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    email: '',
    contrasena: ''
  }

  uid = '';

  // creamos nueva colección para Usuarios
  coleccionUsuarios: Usuario[] = [];

  // tomando nuevo registro
  // ASYNC = ASINCRONICO
  async registrarse() {
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    };

    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.contrasena)
      // método THEN devuelve misma promesa
      .then(res => {
        alert("Encantado de conocerlo.");

        // llamamos una nueva ruta -> nos redirigimos
        this.router.navigate(["/login"]);
      })
      // método CATCH creará un error en caso de que algo salga mal
      .catch(error =>
        alert("Por favor llene todos los parametros.\n" + error)
      );

      // creamos constante UID para el UID que obtengamos
      const uid = await this.servicioAuth.getUid();

      // referenciamos el uid nuevo con el de usuario
      this.usuarios.uid = uid;

      // llamamos función guardarUser
      this.guardarUser();
  }

  // función asíncronica para guardar usuarios
  async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {
      console.log(this.usuarios);
    })
    .catch(error => {
      console.log('Error =>', error);
    })
  }

  async ngOnInit(){
    const uid = await this.servicioAuth.getUid();
    console.log(uid);
  }
}
