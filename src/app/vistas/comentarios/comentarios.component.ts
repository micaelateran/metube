import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { DatabaseService } from '../../servicios/database.service';
import { AuthService } from '../../servicios/auth.service';
import { DataService } from '../../servicios/data.service';
import generateId from '../../funciones/idGenerator';
import { Router } from '@angular/router';
import separarURL from '../../funciones/separador';

interface Comentario{
  codigoComentario: string;
  codigoUsuario: string;
  codigoVideo: string;
  fechaPublicacion: Date;
  texto: string;
}

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
  comentarios: Observable<Comentario[]>;

  constructor(private router: Router, private data: DataService,private database: DatabaseService, private afs: AngularFirestore, public authService: AuthService) { 
    this.idVideo = separarURL(this.router.url);
    this.fotoPerfil = authService.getPicture();
  }

  ngOnInit() {
    this.coleccionDeComentarios = this.afs.collection('Comentarios', ref => {return ref.where('codigoVideo','==', this.idVideo)});
    this.comentarios = this.coleccionDeComentarios.valueChanges();
  }

  agregarComentario(){
    if(this.data.getLinkMiniatura() !== null && this.data.getLinkVideo() !== null){
      this.authService.getAuth().subscribe(auth =>{
        if(auth){
          this.fecha = new Date();
          let texto = (<HTMLInputElement>document.getElementById("texto")).value;
          this.database.agregarComentario(generateId(20),auth.email,this.idVideo, this.fecha, texto);
        }
      });
    }
    
  }

}