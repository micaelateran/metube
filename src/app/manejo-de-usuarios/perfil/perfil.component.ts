import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { AuthService } from '../../servicios/auth.service';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import separarURL from '../../funciones/separador';
import { Video } from '../../modelos/Video';
import { Reto } from '../../modelos/Reto';
import { Usuario } from '../../modelos/Usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  coleccionDeVideos: AngularFirestoreCollection<Video>;
  coleccionDeRetos: AngularFirestoreCollection<Reto>;
  coleccionDeUsuarios: AngularFirestoreCollection<Usuario>;

  videosObs: Observable<Video[]>;
  retosObs: Observable<Reto[]>;
  usuariosObs: Observable<Usuario[]>;

  retos: Reto[];
  videos: Video[];
  usuarios: Usuario[];

  cantidadVideos: number;

  login: boolean;

  constructor(private router: Router, private afs: AngularFirestore, private data: DataService, public authService: AuthService) { }

  ngOnInit() {
    this.cantidadVideos = 0;

    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.login = true;

        this.coleccionDeUsuarios = this.afs.collection('Usuarios', ref => {return ref.where('email','==', this.authService.getEmail())});

        this.usuariosObs = this.coleccionDeUsuarios.valueChanges(); 

        this.usuariosObs.subscribe(usuarios => {
          this.usuarios = usuarios;
        })
        
      } else{
        this.login = false;
      }
    });

    this.coleccionDeVideos = this.afs.collection('Videos', ref => {return ref.where('codigoUsuario','==', this.usuarios[0].codigoUsuario)});
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