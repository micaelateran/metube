import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

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

  constructor(
    private storage: AngularFireStorage
  ) { }
  
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    const file = event.item(0)

    if (file.type.split('/')[0] !== 'video') { 
      console.error('unsupported file type :( ')
      return;
    }

    const path = `test/${new Date().getTime()}_${file.name}`; //Dirección de donde se almacenará

    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    this.task = this.storage.upload(path, file, { customMetadata })

    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges()

    this.downloadURL = this.task.downloadURL(); 
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

}