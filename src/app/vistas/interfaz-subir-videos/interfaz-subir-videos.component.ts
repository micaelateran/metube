import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { DataService } from '../../servicios/data.service';
import { DatabaseService } from '../../servicios/database.service';
import generateId from '../idGenerator';

interface Reto{
  codigoReto: string;
  descripcion: string;
  nombre: string;
  urlMiniatura: string;
}

@Component({
  selector: 'app-interfaz-subir-videos',
  templateUrl: './interfaz-subir-videos.component.html',
  styleUrls: ['./interfaz-subir-videos.component.scss']
})
export class InterfazSubirVideosComponent implements OnInit {

  url: string;
  id: string;

  idVideo: string;

  coleccionDeRetos: AngularFirestoreCollection<Reto>;
  retos: Observable<Reto[]>;

  constructor(private router:Router, private data: DataService, public database:DatabaseService, private afs: AngularFirestore) {
    this.idVideo = generateId(20);
    this.url = router.url;
    this.id = "";

    let concatenar = false;

    for (let caracter of this.url){
      if(caracter == '?' || caracter == '='){
        concatenar = true;
        continue;
      }
      if(concatenar){
        this.id += caracter;
      }
    }
   }

  ngOnInit() {
    this.coleccionDeRetos = this.afs.collection('Retos', ref => {return ref.where('codigoReto','==', this.id)});
    this.retos = this.coleccionDeRetos.valueChanges();
  }

}
