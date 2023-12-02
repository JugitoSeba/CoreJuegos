import { Injectable } from '@angular/core';
// Servicio de Autentificación de Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // referenciamos Auth de Firebase
  constructor(public auth: AngularFireAuth) { }

  // FUNCIÓN PARA REGISTER
  registrar(email: string, contrasena: string){
    // retorna nuevo valor de nombre y contrasena
    return this.auth.createUserWithEmailAndPassword(email,contrasena);

    }
     // función para el inicio de sesión
  iniciarSesion(email: string, contrasena: string){
    return this.auth.signInWithEmailAndPassword(email, contrasena);
  }
  async getUid(){
    // CURRENTUSER -> JUNTO A LA PROMESA, GENERA CAPTURA
    const user = await this.auth.currentUser;

    if(user == null){
      return null;
    }else{
      return user.uid;
    }
  }
  }