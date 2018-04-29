import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';


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
    /*this.authService.loginEmail(this.email,this.password)
    .then((res)=> {
     console.log("USUARIO LOGEADO SEXIMENTE") 
    }).catch((err) => {
      console.log("DUCHAS PAPI") 

    });*/
  }

  onClickFacebookLogin(){

    this.authService.loginFacebook();
}
}
