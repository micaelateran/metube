import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { AuthService } from '../../servicios/auth.service';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import separarURL from '../../funciones/separador';

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
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  coleccionDeVideos: AngularFirestoreCollection<Video>;
  coleccionDeRetos: AngularFirestoreCollection<Reto>;

  videos: Observable<Video[]>;
  retos: Observable<Reto[]>;

  login: boolean;

  imagenPerfil: string;
  nombreUsuario: string;
  email: string;
  idUsuario: string;

  cantidadVideos: number;

  constructor(private router: Router, private afs: AngularFirestore, private data: DataService, public authService: AuthService) { }

  ngOnInit() {
    this.idUsuario = separarURL(this.router.url);

    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.data.setLogin(true);
        this.email= this.authService.getEmail();

        if(this.authService.getSocialPicture()!=null){
          this.imagenPerfil= this.authService.getSocialPicture();
          this.nombreUsuario= auth.displayName;
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
    this.videos = this.coleccionDeVideos.valueChanges();
    this.login = this.data.getLogin();
  }

  verVideo(codigoVideo: string){
    this.router.navigateByUrl("/watch?" + codigoVideo + "=")
  }

  conteoVideos(){
    
  }

}