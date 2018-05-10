import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

    videoID = {id: ""};
    retoID = {id: ""};

    isLogin = {login: false};

    linkVideo = {link: ""};
    linkMiniatura = {link: ""};

    private messageSource = new BehaviorSubject<String>("Default Message");
    currentMessage = this.messageSource.asObservable();

    constructor(){ 
    }

    setLinkVideo(link_video){
        this.linkVideo = {link: link_video};
    }

    getLinkVideo(){
        return this.linkVideo.link;
    }

    setLinkMiniatura(link_miniatura){
        this.linkMiniatura = {link: link_miniatura};
    }

    getLinkMiniatura(){
        return this.linkMiniatura.link;
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
    
}