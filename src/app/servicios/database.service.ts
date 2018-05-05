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

}
