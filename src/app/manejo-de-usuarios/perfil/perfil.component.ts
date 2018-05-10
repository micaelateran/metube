import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { AuthService } from '../../servicios/auth.service';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import separarURL from '../../funciones/separador';
import { Video } from '../../modelos/Video';
import { Reto } from '../../modelos/reto';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  coleccionDeVideos: AngularFirestoreCollection<Video>;
  coleccionDeRetos: AngularFirestoreCollection<Reto>;

  videosObs: Observable<Video[]>;
  retosObs: Observable<Reto[]>;

  retos: Reto[];
  videos: Video[];

  login: boolean;

  imagenPerfil: string;
  nombreUsuario: string;
  email: string;
  idUsuario: string;
  mensaje: string;

  cantidadVideos: number;

  constructor(private router: Router, private afs: AngularFirestore, private data: DataService, public authService: AuthService) { }

  ngOnInit() {
    this.idUsuario = separarURL(this.router.url);

    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.data.setLogin(true);

        if(this.authService.getSocialPicture()!=null){
          this.imagenPerfil = this.authService.getPicture();
          this.nombreUsuario= auth.displayName;
          if(this.authService.getEmail() == null){
            this.email='Te conectaste por Facebook, Google o Twitter.';
          }
        }
        else{
          this.imagenPerfil = this.authService.getPicture();
          this.nombreUsuario= this.authService.getEmail();
        }
      } else{
      this.data.setLogin(false);
      }
    });

    this.coleccionDeVideos = this.afs.collection('Videos', ref => {return ref.where('codigoUsuario','==', this.idUsuario)});
    this.videosObs = this.coleccionDeVideos.valueChanges();

    this.videosObs.subscribe(videos => {
      this.videos = videos;
      this.cantidadVideos = this.videos.length;
    })

    this.coleccionDeRetos = this.afs.collection('Retos');
    this.retosObs = this.coleccionDeRetos.valueChanges();

    this.retosObs.subscribe(retos => {
      this.retos = retos;
    })

    this.login = this.data.getLogin();
  }

  verVideo(codigoVideo: string){
    this.router.navigateByUrl("/watch?" + codigoVideo + "=")
  }

  getNombreReto(codigoReto): string{
    for(let reto of this.retos){
      if(reto.codigoReto === codigoReto){
        return reto.nombre;
      }
    }
    return "";
  }  

}