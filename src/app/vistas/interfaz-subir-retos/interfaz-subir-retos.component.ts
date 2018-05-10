import { Component, OnInit } from '@angular/core';
import generateId from '../../funciones/idGenerator';
import { DataService } from '../../servicios/data.service';
import { Router } from '@angular/router';
import { DatabaseService } from '../../servicios/database.service';
import { AuthService } from '../../servicios/auth.service';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../../modelos/Usuario';

@Component({
  selector: 'app-interfaz-subir-retos',
  templateUrl: './interfaz-subir-retos.component.html',
  styleUrls: ['./interfaz-subir-retos.component.scss']
})
export class InterfazSubirRetosComponent implements OnInit {

  idReto: string;

  coleccionDeUsuarios: AngularFirestoreCollection<Usuario>;

  usuariosObs: Observable<Usuario[]>;

  usuarios: Usuario[];

  constructor(private afs: AngularFirestore, private router: Router, private data: DataService, public database:DatabaseService, public authService: AuthService) { }

  ngOnInit() {
    this.idReto = generateId(20);
  }

  subirReto(){
    let nombre = (<HTMLInputElement>document.getElementById("nombre_reto_input")).value;
    let descripcion = (<HTMLInputElement>document.getElementById("descripcion_input")).value;

    if(nombre !== null && descripcion !== null && this.data.getLinkMiniatura() !== null){
      this.authService.getAuth().subscribe(auth =>{
        if(auth){
          this.coleccionDeUsuarios = this.afs.collection('Usuarios', ref => {return ref.where('email','==', this.authService.getEmail())});

          this.usuariosObs = this.coleccionDeUsuarios.valueChanges(); 

          this.usuariosObs.subscribe(usuarios => {
            this.usuarios = usuarios;
            let id = this.usuarios[0].codigoUsuario;
            this.database.agregarReto(this.idReto, id, descripcion, nombre, this.data.getLinkMiniatura());
            this.router.navigateByUrl('/');
          })
        }
      });
    }
  }

}