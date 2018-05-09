import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { DataService } from '../../servicios/data.service';
import { DatabaseService } from '../../servicios/database.service';
import generateId from '../../funciones/idGenerator';
import separarURL from '../../funciones/separador';
import { AuthService } from '../../servicios/auth.service';

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
  retos: Observable<Reto[]>;

  constructor(private router:Router, private data: DataService, public database:DatabaseService, private afs: AngularFirestore, public authService: AuthService) {
    this.idVideo = generateId(20);
    this.idReto = separarURL(this.router.url);
  }

  ngOnInit() {
    this.coleccionDeRetos = this.afs.collection('Retos', ref => {return ref.where('codigoReto','==', this.idReto)});
    this.retos = this.coleccionDeRetos.valueChanges();
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
          
          console.log("Link de la miniatura antes de enviar: " + this.data.getLinkMiniatura());
          console.log("Link del video antes de enviar: " + linkVideo);
          this.database.agregarVideo(this.idReto, auth.uid, generateId(20), this.data.getLinkMiniatura(), linkVideo);
          this.router.navigateByUrl('/')
        }
      });
    }
  }

}
