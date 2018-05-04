import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  public userEmail;
  public photoUrl ="https://image.freepik.com/free-icon/unknown-user-symbol_318-54178.jpg";  
  constructor(
  public afAuth: AngularFireAuth
  ) { }

  loginFacebook() {
  return this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
  }

  loginTwitter () {
    return this.afAuth.auth.signInWithPopup( new firebase.auth.TwitterAuthProvider());
  }

  loginGoogle() {
  return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }

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