import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public email: string;
  public password : string;

  constructor(public authService : AuthService, private router: Router) { }

  ngOnInit() { }

  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
    .then((res) => {
      console.log("BIEEEN")
      this.router.navigateByUrl('/');
    }).catch( (err) => {
     console.log("MAAAL")
    });
  }

  registrarUsuario(){
    let nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    let apellidoPaterno = (<HTMLInputElement>document.getElementById("nombre")).value;
    let apellidoMaterno = (<HTMLInputElement>document.getElementById("nombre")).value;
    let fecha_nacimiento = (<HTMLInputElement>document.getElementById("nombre")).value;
    let email = (<HTMLInputElement>document.getElementById("nombre")).value;
    let contraseña = (<HTMLInputElement>document.getElementById("nombre")).value;

    this.onSubmitAddUser();
  }

}
