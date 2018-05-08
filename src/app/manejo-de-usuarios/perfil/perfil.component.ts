import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  login: boolean;

  imagenPerfil: string;
  nombreUsuario: string;
  email: string;
  idUsuario: string;

  cantidadVideos: number;

  constructor(private data: DataService, public authService: AuthService) { }

  ngOnInit() {
    this.login = this.data.getLogin();
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.data.setLogin(true);

        this.email= this.authService.getEmail();
        this.idUsuario= auth.uid;
        
        if(this.authService.getSocialPicture()!=null){
          this.imagenPerfil= this.authService.getSocialPicture();
          this.nombreUsuario= auth.displayName;
        }
        else{
          this.imagenPerfil = this.authService.getPicture();
          this.nombreUsuario= this.authService.getEmail();
        }
     }
      else{
        this.data.setLogin(false);
      }
    });
  }

  conteoVideos(){
    
  }

}