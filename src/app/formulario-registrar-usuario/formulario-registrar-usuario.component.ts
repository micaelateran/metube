import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-formulario-registrar-usuario',
  templateUrl: './formulario-registrar-usuario.component.html',
  styleUrls: ['./formulario-registrar-usuario.component.scss']
})
export class FormularioRegistrarUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registrar(): Usuario{
    var contraseña = (<HTMLInputElement>document.getElementById("contraseña")).value;
    var validacion_contraseña = (<HTMLInputElement>document.getElementById("validacion_contraseña")).value;
    if(contraseña == validacion_contraseña){
      var usuario = (<HTMLInputElement>document.getElementById("usuario")).value;
      var email = (<HTMLInputElement>document.getElementById("email")).value;
      
      var genero = ""
      var genero_masculino = (<HTMLInputElement>document.getElementById("genero_masculino")).checked;
      var genero_femenino = (<HTMLInputElement>document.getElementById("genero_femenino")).checked;
      var genero_otro = (<HTMLInputElement>document.getElementById("genero_otro")).checked;

      if (genero_masculino){
        genero = "masculino"
      } else if (genero_femenino){
        genero = "femenino"
      } else if (genero_otro){
        genero = "alternativo"
      }

      var fecha_nacimiento = (<HTMLInputElement>document.getElementById("fecha_nacimiento")).value;

      var nuevo_usuario = new Usuario(usuario,email,contraseña,genero,fecha_nacimiento);
      alert("Bienvenido " + usuario + "!")
      console.log(nuevo_usuario.toString());
      return new Usuario(usuario,email,contraseña,genero,fecha_nacimiento);
    }else{
      alert("Debes ingresar correctamente tu contraseña :(");
      return null;
    }
  }

}
