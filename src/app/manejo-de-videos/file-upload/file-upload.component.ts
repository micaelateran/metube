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

  constructor(private data: DataService, private storage: AngularFireStorage) { }
  
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    const file = event.item(0)

    if (file.type.split('/')[0] !== 'video' && file.type.split('/')[0] !== 'image') { 
      console.error('Tipo de archivo no admitido :( ')
      return;
    }

    const path = `test/${new Date().getTime()}_${file.name}`; //Dirección de donde se almacenará

    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    this.task = this.storage.upload(path, file, { customMetadata })

    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges()

    this.downloadURL = this.task.downloadURL(); 
    
  }

  iniciar(){
    console.log("Iniciado");
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

}