import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../servicios/data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  task: AngularFireUploadTask; //Tarea principal

  percentage: Observable<number>; //Proceso para monitorear

  snapshot: Observable<any>;

  downloadURL: Observable<string>; //Link de descarga

  isHovering: boolean;

  file;

  listo: boolean;

  constructor(private data: DataService, private storage: AngularFireStorage) {  }
  
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    this.file = event.item(0)

    if (this.file.type.split('/')[0] !== 'video' && this.file.type.split('/')[0] !== 'image') { 
      console.error('Tipo de archivo no admitido :( ')
      return;
    }

    const path = `test/${new Date().getTime()}_${this.file.name}`; //Dirección de donde se almacenará

    const customMetadata = { app: 'Metube-powered PWA!' };

    this.task = this.storage.upload(path, this.file, { customMetadata })

    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges()

    this.downloadURL = this.task.downloadURL(); 
    this.listo = true;
  }

  iniciar(){
    console.log("Iniciado");
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

  enviarLink(){
    if(this.listo){
      let link = (<HTMLInputElement>document.getElementById("link")).value;

      if(link !== null){
        console.log("Tipo: " + this.file.type.split('/')[0] );

        if(this.file.type.split('/')[0] === 'image'){
          this.data.setLinkMiniatura(link);
          console.log("Dentro de image");
        } 
        if(this.file.type.split('/')[0] === 'video'){
          this.data.setLinkVideo(link);
          console.log("Dentro de video");
        }
      }
      this.listo = false;
    }
  }

}