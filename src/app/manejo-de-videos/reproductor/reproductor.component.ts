import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Video{
  calificacion: number;
  codigoReto: string;
  codigoUsuario: string;
  codigoVideo: string;
  miniaturaUrl: string;
  videoUrl: string;
}

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.scss']
})
export class ReproductorComponent implements OnInit {

  url: string;
  id: string;

  coleccionDeVideos: AngularFirestoreCollection<Video>;
  videos: Observable<Video[]>;

  constructor(private router:Router, private afs: AngularFirestore) { 
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
    this.coleccionDeVideos = this.afs.collection('Videos', ref => {return ref.where('codigoVideo','==', this.id)});
    this.videos = this.coleccionDeVideos.valueChanges();
  }

}
