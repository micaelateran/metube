import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  public userEmail;
  public photoUrl ="https://firebasestorage.googleapis.com/v0/b/metube-120e9.appspot.com/o/iconoUsuario.png?alt=media&token=0f5309ba-13cb-4fac-b9d4-315e6db5e2b1";  
  constructor(
  public afAuth: AngularFireAuth
  ) { }

  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
     this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
     .then( userData =>  resolve(userData),
     err => reject (err));
    });
  }

  loginEmail(email: string, pass: string) {
    this.userEmail=email;
    return new Promise((resolve, reject) => {
    this.afAuth.auth.signInWithEmailAndPassword(email, pass)
    .then( userData =>  resolve(userData),
     err => reject (err));
    });
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  getSocialPicture(){
    return firebase.auth().currentUser.photoURL;
  }
  getEmail(){
    return firebase.auth().currentUser.email;
  }
  getPicture(){
    return this.photoUrl;
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

}