import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

    videoID = {id: ""};
    retoID = {id: ""};

    private messageSource = new BehaviorSubject<String>("Default Message");
    currentMessage = this.messageSource.asObservable();

    constructor(){ }

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