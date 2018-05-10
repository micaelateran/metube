import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import generateId from '../../funciones/idGenerator';
import { DatabaseService } from '../../servicios/database.service';
import { DataService } from '../../servicios/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public email: string;
  public password : string;

  datosIncorrectos: boolean;
  registrandose: boolean;

  constructor(private data: DataService, public authService : AuthService, private database: DatabaseService, private router: Router) { }

  ngOnInit() { 
    this.datosIncorrectos = false;
    this.registrandose = false;
  }

  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
    .then((res) => {
      console.log("BIEEEN")
      this.router.navigateByUrl('/');
    }).catch( (err) => {
      this.datosIncorrectos = true;
      console.log("MAAAL")
    });
  }

  registrarUsuario(){
    let codigoUsuario = generateId(20);
    let nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    let apellidoPaterno = (<HTMLInputElement>document.getElementById("apellido_paterno")).value;
    let apellidoMaterno = (<HTMLInputElement>document.getElementById("apellido_materno")).value;
    let fecha_nacimiento = (<HTMLInputElement>document.getElementById("fecha_nacimiento")).value;
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;
    let confirmar_password = (<HTMLInputElement>document.getElementById("confirmar_password")).value;
    let urlPerfil = this.data.getLinkMiniatura();
    let nombreUsuario = (<HTMLInputElement>document.getElementById("nombre_usuario")).value;

    let fecha = new Date(fecha_nacimiento);
    
    if(nombre !== "" && apellidoPaterno !== "" && apellidoPaterno !== "" && fecha_nacimiento !== "" && email !== "" && password !== "" && confirmar_password !== "" && password === confirmar_password && nombreUsuario !== ""){
      if(urlPerfil === ""){
        urlPerfil = "https://firebasestorage.googleapis.com/v0/b/metube-120e9.appspot.com/o/iconoUsuario.png?alt=media&token=0f5309ba-13cb-4fac-b9d4-315e6db5e2b1";
      }
      if(!this.registrandose){
        this.registrandose = true;
        this.database.agregarUsuario(apellidoMaterno, apellidoPaterno, codigoUsuario, email, fecha, nombre, nombreUsuario, password, urlPerfil);
        this.onSubmitAddUser();
      }      
    } else{
      this.datosIncorrectos = true;
    }
  }

}
