import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { DataService } from '../../servicios/data.service';
import { DatabaseService } from '../../servicios/database.service';
import generateId from '../../funciones/idGenerator';
import separarURL from '../../funciones/separador';
import { AuthService } from '../../servicios/auth.service';
import { Usuario } from '../../modelos/Usuario';

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

  idReto: string;

  idVideo: string;

  coleccionDeRetos: AngularFirestoreCollection<Reto>;
  coleccionDeUsuarios: AngularFirestoreCollection<Usuario>;

  retosObs: Observable<Reto[]>;
  usuariosObs: Observable<Usuario[]>;

  usuarios: Usuario[];

  constructor(private router:Router, private data: DataService, public database:DatabaseService, private afs: AngularFirestore, public authService: AuthService) {
    this.idVideo = generateId(20);
    this.idReto = separarURL(this.router.url);
  }

  ngOnInit() {
    this.coleccionDeRetos = this.afs.collection('Retos', ref => {return ref.where('codigoReto','==', this.idReto)});
    this.retosObs = this.coleccionDeRetos.valueChanges();
  }

  subirVideo(){
    if(this.data.getLinkMiniatura() !== null && this.data.getLinkVideo() !== null){
      this.authService.getAuth().subscribe(auth =>{
        if(auth){
          let linkVideo = "/";
          let concatenar = false;

          for(let caracter of this.data.getLinkVideo()){
            if(caracter == 'v'){
              concatenar = true;
            }
            if(concatenar){
              linkVideo += caracter;
            }
          }
          
          let fecha = new Date();

          this.coleccionDeUsuarios = this.afs.collection('Usuarios', ref => {return ref.where('email','==', this.authService.getEmail())});

          this.usuariosObs = this.coleccionDeUsuarios.valueChanges(); 

          this.usuariosObs.subscribe(usuarios => {
            this.usuarios = usuarios;
            let id = this.usuarios[0].codigoUsuario;
            this.database.agregarVideo(this.idReto, id, generateId(20), fecha, this.data.getLinkMiniatura(), linkVideo);
            this.router.navigateByUrl('/');
          })
        }
      });
    }
  }

}