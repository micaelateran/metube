import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class DatabaseService {

  constructor(public database : AngularFirestore) { }

  agregarComentario(codigoComentario: string, codigoUsuario: string, codigoVideo: string, fechaPublicacion: Date, texto: string){
    this.database.collection('Comentarios').add({'codigoComentario': codigoComentario, 'codigoUsuario': codigoUsuario, 'codigoVideo': codigoVideo, 'fechaPublicacion': fechaPublicacion, 'texto': texto});
  }

  agregarVideo(codigoReto: string, codigoUsuario: string, codigoVideo: string, miniaturaUrl: string, videoUrl: string){
    this.database.collection("Videos").add({'calificacion': 0, 'codigoReto': codigoReto, 'codigoUsuario': codigoUsuario, 'codigoVideo': codigoVideo, 'miniaturaUrl': miniaturaUrl, 'videoUrl': videoUrl})
  }

  agregarReto(codigoReto: string, codigoUsuario: string, descripcion: string, nombre: string, urlMiniatura: string){
    console.log("Añadiendo a la base de datos");
    this.database.collection("Retos").add({'codigoReto': codigoReto, 'codigoUsuario': codigoUsuario, 'descripcion': descripcion, 'nombre': nombre, 'urlMiniatura': urlMiniatura})
  }

}