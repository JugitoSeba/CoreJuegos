import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioLogueado: boolean = false;

  constructor(public auth: AngularFireAuth) {
    // Verificar la sesión cuando se inicializa el servicio
    this.verificarSesion();
  }

  verificarSesion() {
    this.usuarioLogueado = this.auth.currentUser !== null;
  }

  // FUNCIÓN PARA REGISTER
  registrar(email: string, contrasena: string){
    return this.auth.createUserWithEmailAndPassword(email, contrasena);
  }

  // Función para el inicio de sesión
  iniciarSesion(email: string, contrasena: string){
    return this.auth.signInWithEmailAndPassword(email, contrasena);
  }

  // Método para cerrar sesión
  cerrarSesion() {
    return this.auth.signOut();
  }


  // Método para obtener el UID del usuario actual
  async getUid(): Promise<string | null> {
    const user = await this.auth.currentUser;

    if (user == null) {
      return null;
    } else {
      return user.uid;
    }
  }
  

}