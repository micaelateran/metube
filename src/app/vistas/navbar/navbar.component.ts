import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../servicios/data.service';
import { Usuario } from '../../modelos/Usuario';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
  
  coleccionDeUsuarios: AngularFirestoreCollection<Usuario>;

  usuariosObs: Observable<Usuario[]>;

  usuarios: Usuario[];

  constructor(private data: DataService, public authService: AuthService, private router: Router, private afs: AngularFirestore) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.isLogin = true;
        this.data.setLogin(true);

        this.coleccionDeUsuarios = this.afs.collection('Usuarios', ref => {return ref.where('email','==', this.authService.getEmail())});

        this.usuariosObs = this.coleccionDeUsuarios.valueChanges(); 

        this.usuariosObs.subscribe(usuarios => {
          this.usuarios = usuarios;
        })
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
    this.router.navigateByUrl('/profile?' + this.usuarios[0].codigoUsuario);
  }

}
