import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../servicios/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email : string;
  public password: string;

  constructor(private data: DataService, public authService: AuthService, private router: Router
  ) { }

  ngOnInit() {
  }
  
  onSubmitLogin(){
    this.authService.loginEmail(this.email,this.password)
    .then((res)=> {
     console.log("USUARIO LOGEADO SEXIMENTE");
      this.data.setLogin(true);
      this.router.navigateByUrl('/');
    }).catch((err) => {
      console.log("DUCHAS PAPI") 
    });
  }
  
}
