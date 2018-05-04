import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

    private messageSource = new BehaviorSubject<String>("Default Message");
    currentMessage = this.messageSource.asObservable();

    constructor(){ }
    
    videoID = {id :"1"}

    setVideoID(codigo){
        this.videoID = {id:codigo}
    }

    getVideoID(){
        return this.videoID.id
    }
    
}