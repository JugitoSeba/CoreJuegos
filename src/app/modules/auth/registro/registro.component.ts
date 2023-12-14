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
  hide = true; // sirve para ocultar la contraseña

  // definimos de forma pública el servicioAuth, servicioFirestore, servicio de ruteo, para que no hay problemas a futuro
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

  // registra nuevo registro
  // metodo asincronico .1
  async registrarse() {
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    };
    //2
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

      // creamos constante UID para el UID que obtengamos.3
      const uid = await this.servicioAuth.getUid();

      // referenciamos el uid nuevo con el de usuario
      this.usuarios.uid = uid;

      // llamamos función guardarUser
      this.guardarUser();
  }

  // función asíncronica para guardar usuarios y agregarlos a la base de datos
  async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {
      console.log(this.usuarios); //Si es exitosa lo muestra por consola.
    })
    .catch(error => {
      console.log('Error =>', error);
    })
  }
  //se ejecuta al iniciar el componente para mostra
  async ngOnInit(){
    const uid = await this.servicioAuth.getUid();
    console.log(uid);
  }
}
