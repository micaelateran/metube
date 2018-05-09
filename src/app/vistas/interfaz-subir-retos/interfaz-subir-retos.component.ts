import { Component, OnInit } from '@angular/core';
import generateId from '../../funciones/idGenerator';
import { DataService } from '../../servicios/data.service';
import { Router } from '@angular/router';
import { DatabaseService } from '../../servicios/database.service';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-interfaz-subir-retos',
  templateUrl: './interfaz-subir-retos.component.html',
  styleUrls: ['./interfaz-subir-retos.component.scss']
})
export class InterfazSubirRetosComponent implements OnInit {

  idReto: string;

  constructor(private router: Router, private data: DataService, public database:DatabaseService, public authService: AuthService) { }

  ngOnInit() {
    this.idReto = generateId(20);
  }

  subirReto(){
    let nombre = (<HTMLInputElement>document.getElementById("nombre_reto_input")).value;
    let descripcion = (<HTMLInputElement>document.getElementById("descripcion_input")).value;

    if(nombre !== null && descripcion !== null && this.data.getLinkMiniatura() !== null){
      this.authService.getAuth().subscribe(auth =>{
        if(auth){
          this.database.agregarReto(this.idReto, auth.uid, descripcion, nombre, this.data.getLinkMiniatura());
          this.router.navigateByUrl('/')
        }
      });
    }
  }

}