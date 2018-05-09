import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';
import { DataService } from '../../servicios/data.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(private data: DataService, private db: AngularFireDatabase) { 
  }

  ngOnInit() {
  }

  selectedFile(event: any){
    const file: File = event.target.files[0];

    const metaData = {'contentType': file.type};
    const storageRef: firebase.storage.Reference = firebase.storage().ref('/miniaturas/' + file.name);
    const uploadTask: firebase.storage.UploadTask = storageRef.put(file,metaData);

    uploadTask.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
      const downloadUrl = uploadSnapshot.downloadURL;
      this.data.setLinkMiniatura(downloadUrl);
    })
  }

}
