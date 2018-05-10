import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { DatabaseService } from '../../servicios/database.service';
import { AuthService } from '../../servicios/auth.service';
import { DataService } from '../../servicios/data.service';
import generateId from '../../funciones/idGenerator';
import { Router } from '@angular/router';
import separarURL from '../../funciones/separador';
import { Comentario } from '../../modelos/Comentario';
import { Usuario } from '../../modelos/Usuario';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  idVideo: string;

  fecha: Date;

  fotoPerfil: string;

  coleccionDeComentarios: AngularFirestoreCollection<Comentario>;
  coleccionDeUsuarios: AngularFirestoreCollection<Usuario>;

  comentariosObs: Observable<Comentario[]>;
  usuariosObs: Observable<Usuario[]>;

  usuarios: Usuario[];

  constructor(private router: Router, private data: DataService,private database: DatabaseService, private afs: AngularFirestore, public authService: AuthService) { 
    this.idVideo = separarURL(this.router.url);
  }

  ngOnInit() {
    this.coleccionDeComentarios = this.afs.collection('Comentarios', ref => {return ref.where('codigoVideo','==', this.idVideo)});
    this.coleccionDeUsuarios = this.afs.collection('Usuarios');

    this.comentariosObs = this.coleccionDeComentarios.valueChanges();
    this.usuariosObs = this.coleccionDeUsuarios.valueChanges(); 

    this.usuariosObs.subscribe(usuarios => {
      this.usuarios = usuarios;
    })
  }

  agregarComentario(){
    if(this.data.getLinkMiniatura() !== null && this.data.getLinkVideo() !== null){
      this.authService.getAuth().subscribe(auth =>{
        if(auth){
          let coleccionDeMiUsuario: AngularFirestoreCollection<Usuario>;
          let usuarioObs: Observable<Usuario[]>;

          coleccionDeMiUsuario = this.afs.collection('Usuarios', ref => {return ref.where('email','==', this.authService.getEmail())});
          usuarioObs = coleccionDeMiUsuario.valueChanges(); 

          usuarioObs.subscribe(usuario => {
            this.fecha = new Date();
            let texto = (<HTMLInputElement>document.getElementById("texto")).value;
            
            this.database.agregarComentario(generateId(20),usuario[0].codigoUsuario, this.idVideo, this.fecha, texto);
          })
        }
      });
    }
  }

  getNombreUsuario(codigoUsuario: string): string{
    for(let usuario of this.usuarios){
      if(usuario.codigoUsuario === codigoUsuario){
        return usuario.nombreUsuario;
      }
    }
    return "";
  }

  getFotoUsuario(codigoUsuario: string): string{
    for(let usuario of this.usuarios){
      if(usuario.codigoUsuario === codigoUsuario){
        return usuario.urlPerfil;
      }
    }
    return "";
  }

}