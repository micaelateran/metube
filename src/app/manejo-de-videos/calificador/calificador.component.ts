import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ArgumentOutOfRangeError } from 'rxjs';


interface Video{
  calificacion: number;
  cantidadVotos: number;
  codigoReto: string;
  codigoUsuario: string;
  codigoVideo: string;
  miniaturaUrl: string;
  videoUrl: string;
}


@Component({
  selector: 'app-calificador',
  templateUrl: './calificador.component.html',
  styleUrls: ['./calificador.component.scss']
})
export class CalificadorComponent implements OnInit {

  url: string;
  videoId: string;
  documentId :string;


  coleccionDeVideos: AngularFirestoreCollection<Video>;
  videos: any;


  constructor(private router:Router, private afs: AngularFirestore) { 
    this.url = router.url;
    this.videoId = "";

    let concatenar = false;

    for (let caracter of this.url){
      if(caracter == '?' || caracter == '='){
        concatenar = true;
        continue;
      }
      if(concatenar){
        this.videoId += caracter;
      }
    }
  }


  ngOnInit() {

    this.coleccionDeVideos = this.afs.collection('Videos', ref => {return ref.where('codigoVideo','==', this.videoId)});
    this.videos = this.coleccionDeVideos.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Video;
        const id = a.payload.doc.id;
        this.documentId = id;
        return { id, data };
      });
    });
  }

  enviarCalificacion(){
    
    let valor;
    let calificacion = +(<HTMLInputElement>document.getElementById("calificacion")).value;
    let cantidadVotos = +(<HTMLInputElement>document.getElementById("cantidadVotos")).value;

    if((<HTMLInputElement>document.getElementById("radio1")).checked){
      valor = 5;
    }
    else if ((<HTMLInputElement>document.getElementById("radio2")).checked){
      valor = 4;
    }
    else if ((<HTMLInputElement>document.getElementById("radio3")).checked){
      valor = 3;
    }
    else if ((<HTMLInputElement>document.getElementById("radio4")).checked){
      valor = 2;
    }
    else if ((<HTMLInputElement>document.getElementById("radio5")).checked){
      valor = 1;
    }
    else{
      valor=0;
    }

    let total = (calificacion*cantidadVotos) + valor;
    let final = +(total / (cantidadVotos+1)).toFixed(1);
    let cant = cantidadVotos+1;

    this.afs.collection("Videos").doc(this.documentId).update({calificacion:final,cantidadVotos:cant})
    
  }



}
