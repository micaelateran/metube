import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class DatabaseService {

  constructor(
    public database : AngularFirestore
  ) { }

  añadirPrueba(){
    this.database.collection('Pruebas').add({'nombre': "Joaquin", 'codigo':"vargas"});
  }

  agregarComentario(codigoComentario: string, codigoUsuario: string, codigoVideo: string, fechaPublicacion: Date, texto: string){
    this.database.collection('Comentarios').add({'codigoComentario': codigoComentario, 'codigoUsuario': codigoUsuario, 'codigoVideo': codigoVideo, 'fechaPublicacion': fechaPublicacion, 'texto': texto});
  }

}