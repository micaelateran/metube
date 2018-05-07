import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../servicios/data.service';

interface Video{
  calificacion: number;
  codigoReto: string;
  codigoUsuario: string;
  codigoVideo: string;
  miniaturaUrl: string;
  videoUrl: string;
}

interface Reto{
  codigoReto: string;
  descripcion: string;
  nombre: string;
  urlMiniatura: string;
}

@Component({
  selector: 'app-lista-videos',
  templateUrl: './lista-videos.component.html',
  styleUrls: ['./lista-videos.component.scss']
})
export class ListaVideosComponent implements OnInit {

  nombre: string;

  coleccionDeVideos: AngularFirestoreCollection<Video>;
  coleccionDeRetos: AngularFirestoreCollection<Reto>;

  videos: Observable<Video[]>;
  retos: Observable<Reto[]>;

  constructor(private router:Router, private data: DataService, private afs: AngularFirestore) { }

  ngOnInit() {
    this.coleccionDeVideos = this.afs.collection('Videos', ref => {return ref.where('codigoReto','==', this.data.getRetoID())});
    this.coleccionDeRetos = this.afs.collection('Retos', ref => {return ref.where('codigoReto','==', this.data.getRetoID())})

    this.videos = this.coleccionDeVideos.valueChanges();
    this.retos = this.coleccionDeRetos.valueChanges();
  }

  ver(codigoVideo: string): void{
    this.router.navigateByUrl('/watch?' + codigoVideo);
  }

  subirVideo(codigoReto: string): void{
    this.router.navigateByUrl('/upload?' + codigoReto);
  }

}