import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private usuariosCollection: AngularFirestoreCollection<Usuario>

  // Dentro de los parametros la BD
  constructor(private database: AngularFirestore) {
    // Se referencia a la colección de la BD
    this.usuariosCollection = this.database.collection<Usuario>('usuarios')
  }

  agregarUsuario(usuario: Usuario, id: string) {
    // RESOLVE: promesa resulta -> similar al then
    // REJECT: promesa rechazada -> similar al catch
    return new Promise(async (resolve, reject) => {
      try {
        usuario.uid = id;

        const resultado = await this.usuariosCollection.doc(id).set(usuario)
        // Mostrar resultado sin problema
        resolve(resultado)
      }catch(error){
        // Y si hay un problema
        reject(error)
      }
    })
  }
}
