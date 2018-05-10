import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../servicios/data.service';
import { Video } from '../../modelos/Video';
import { Reto } from '../../modelos/Reto';

@Component({
  selector: 'app-lista-videos',
  templateUrl: './lista-videos.component.html',
  styleUrls: ['./lista-videos.component.scss']
})
export class ListaVideosComponent implements OnInit {

  nombre: string;

  coleccionDeVideos: AngularFirestoreCollection<Video>;
  coleccionDeRetos: AngularFirestoreCollection<Reto>;

  videosObs: Observable<Video[]>;
  retosObs: Observable<Reto[]>;


  constructor(private router:Router, private data: DataService, private afs: AngularFirestore) { }

  ngOnInit() {
    this.coleccionDeVideos = this.afs.collection('Videos', ref => {return ref.where('codigoReto','==', this.data.getRetoID())});
    this.coleccionDeRetos = this.afs.collection('Retos', ref => {return ref.where('codigoReto','==', this.data.getRetoID())})

    this.videosObs = this.coleccionDeVideos.valueChanges();
    this.retosObs = this.coleccionDeRetos.valueChanges();
  }

  ver(codigoVideo: string): void{
    this.router.navigateByUrl('/watch?' + codigoVideo);
  }

  subirVideo(codigoReto: string): void{
    this.router.navigateByUrl('/upload?' + codigoReto);
  }

}