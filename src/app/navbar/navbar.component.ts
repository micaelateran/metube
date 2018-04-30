import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.isLogin=true;

        if(this.authService.getSocialPicture()!=null){
        this.nombreUsuario =auth.displayName;
        this.fotoUsuario = this.authService.getSocialPicture();
      }
        else{
        this.nombreUsuario =this.authService.getEmail();
        this.fotoUsuario = this.authService.getPicture();
        console.log(this.authService.getPicture());

        }

     }
      else{
        this.isLogin=false;
      }
    });
  }

  onClickLogout(){
    this.authService.logout()
  }

}
