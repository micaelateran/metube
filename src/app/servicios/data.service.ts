import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

    videoID = {id: ""};
    retoID = {id: ""};

    isLogin = {login: false};

    userID = {id: ""};

    private messageSource = new BehaviorSubject<String>("Default Message");
    currentMessage = this.messageSource.asObservable();

    constructor(){ 
    }

    setLogin(log){
        this.isLogin = {login: log}
    }

    getLogin(){
        return this.isLogin.login;
    }

    setVideoID(codigo){
        this.videoID = {id:codigo};
    }

    getVideoID(){
        return this.videoID.id;
    }

    setRetoID(codigo){
        this.retoID = {id:codigo};
    }

    getRetoID(){
        return this.retoID.id;
    }

    setUserID(codigo){
        this.userID = {id:codigo};
    }

    getUserID(){
        return this.userID.id;
    }
    
}