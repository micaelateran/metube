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
      var genero_masculino = (<HTMLInputElement>document.getElementById("genero_masculino")).value;
      var genero_femenino = (<HTMLInputElement>document.getElementById("genero_femenino")).value;
      var genero_otro = (<HTMLInputElement>document.getElementById("genero_otro")).value;

      if(genero_masculino != null){
        genero = "Masculino"
      }
      if(genero_femenino != null){
        genero = "Femenino"
      }
      if(genero_otro != null){
        genero = "Otro"
      }
      
      var fecha_nacimiento = (<HTMLInputElement>document.getElementById("fecha_nacimiento")).value;

      var nuevo_usuario = new Usuario(usuario,email,contraseña,genero,fecha_nacimiento);
      console.log(nuevo_usuario.toString());
      return new Usuario(usuario,email,contraseña,genero,fecha_nacimiento);
    }else{
      alert("Debes ingresar correctamente tu contraseña :(");
      return null;
    }
  }

}
