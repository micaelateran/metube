import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email : string;
  public password: string;

  constructor(
    public authService: AuthService 
  ) { }

  ngOnInit() {
  }
  
  onSubmitLogin(){
    this.authService.loginEmail(this.email,this.password)
    .then((res)=> {
     console.log("USUARIO LOGEADO SEXIMENTE") 
    }).catch((err) => {
      console.log("DUCHAS PAPI") 

    });
  }

  onClickGoogleLogin() {
    this.authService.loginGoogle()
     .then((res) => {
         //
     }).catch( err => console.log(err.message));
   }
 
   onClickFacebookLogin() {
     this.authService.loginFacebook()
       .then((res) => {
           //
       }).catch( err => console.log(err.message));
   }
 
   onClickTwitterLogin() {
     this.authService.loginTwitter()
       .then((res) => {
         //
       }).catch (err => console.log(err.message));
   }

}
