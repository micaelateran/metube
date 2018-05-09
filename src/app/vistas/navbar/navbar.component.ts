import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../servicios/data.service';

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

  userID: string;

  constructor(private data: DataService, public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.isLogin=true;
        this.data.setLogin(true);

        this.userID = auth.uid;

        if(this.authService.getSocialPicture()!=null){
        this.nombreUsuario =auth.displayName;
        this.fotoUsuario = this.authService.getSocialPicture();
      }
        else{
          this.nombreUsuario =this.authService.getEmail();
          this.fotoUsuario = this.authService.getPicture();
        }
     }
      else{
        this.isLogin=false;
      }
    });
  }

  onClickLogout(){
    this.authService.logout()
    this.data.setLogin(false);
    this.router.navigateByUrl('/');
  }

  verPerfil(){
    this.router.navigateByUrl('/profile?' + this.userID);
  }

}
