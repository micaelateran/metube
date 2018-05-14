import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../servicios/data.service';
import { Video } from '../../modelos/Video';
import { Reto } from '../../modelos/Reto';
import { Usuario } from '../../modelos/Usuario';
import { AuthService } from '../../servicios/auth.service';
import separarURL from '../../funciones/separador';

@Component({
  selector: 'app-lista-videos',
  templateUrl: './lista-videos.component.html',
  styleUrls: ['./lista-videos.component.scss']
})
export class ListaVideosComponent implements OnInit {

  nombre: string;

  coleccionDeVideos: AngularFirestoreCollection<Video>;
  coleccionDeRetos: AngularFirestoreCollection<Reto>;
  coleccionDeUsuarios: AngularFirestoreCollection<Usuario>;

  videosObs: Observable<Video[]>;
  retosObs: Observable<Reto[]>;
  usuariosObs: Observable<Usuario[]>;

  usuarios: Usuario[];
  videos: Video[];

  idReto: string;

  cantidadVotosPorReto: number;

  constructor(private router:Router, private data: DataService, private afs: AngularFirestore, private authService: AuthService) { 
    this.idReto = separarURL(this.router.url);
  }

  ngOnInit() {
    this.coleccionDeVideos = this.afs.collection('Videos', ref => {return ref.where('codigoReto','==', this.idReto)});
    this.coleccionDeRetos = this.afs.collection('Retos', ref => {return ref.where('codigoReto','==', this.idReto)});
    this.coleccionDeUsuarios = this.afs.collection('Usuarios');

    this.videosObs = this.coleccionDeVideos.valueChanges();
    this.retosObs = this.coleccionDeRetos.valueChanges();
    this.usuariosObs = this.coleccionDeUsuarios.valueChanges(); 

    this.usuariosObs.subscribe(usuarios => {
      this.usuarios = usuarios;
    })

    let coleccion2:  AngularFirestoreCollection<Video>= this.afs.collection('Videos', ref => {return ref.where('codigoReto','==', this.idReto)});
    let videosObs2: Observable<Video[]> = coleccion2.valueChanges();

    videosObs2.subscribe(videos => {
      this.videos = videos;

      this.cantidadVotosPorReto = 0;
      for(let video of this.videos){
        this.cantidadVotosPorReto += video.cantidadVotos;
      }
    })
    
  }

  ver(codigoVideo: string): void{
    this.router.navigateByUrl('/watch?' + codigoVideo);
  }

  subirVideo(codigoReto: string): void{
    this.router.navigateByUrl('/upload?' + codigoReto);
  }

  getNombreUsuario(codigoUsuario: string): string{
    for(let usuario of this.usuarios){
      if(usuario.codigoUsuario === codigoUsuario){
        return usuario.nombreUsuario;
      }
    }
    return "";
  }

}