import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../servicios/data.service';
import { DatabaseService } from '../../servicios/database.service';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Reto{
  codigoReto: string;
  descripcion: string;
  nombre: string;
  urlMiniatura: string;
}

@Component({
  selector: 'app-interfaz-retos',
  templateUrl: './interfaz-retos.component.html',
  styleUrls: ['./interfaz-retos.component.scss']
})
export class InterfazRetosComponent implements OnInit {

  coleccionDeRetos: AngularFirestoreCollection<Reto>;
  retos: Observable<Reto[]>;

  constructor(private router:Router, private data: DataService, public database:DatabaseService, private afs: AngularFirestore) { }

  ngOnInit() {
    this.coleccionDeRetos = this.afs.collection('Retos');
    this.retos = this.coleccionDeRetos.valueChanges();
  }

  listar(id: string): void{
    this.data.setRetoID(id);
    this.router.navigateByUrl('list?' + id);
  }

  /*
  reto1(): void{
    this.data.setVideoID("/v0/b/metube-120e9.appspot.com/o/test%2F1525036482246_Trucos%20de%20yoyo.mp4?alt=media&token=f8877c1a-3dbd-4795-96b0-82c01b65bb1d");
    this.database.añadirPrueba();
    this.router.navigateByUrl('/watch');
  }

  reto2(): void{
    this.data.setVideoID("/v0/b/metube-120e9.appspot.com/o/test%2F1525036482246_Trucos%20de%20yoyo.mp4?alt=media&token=f8877c1a-3dbd-4795-96b0-82c01b65bb1d");
    this.router.navigateByUrl('/watch');
  }

  reto3(): void{
    this.data.setVideoID("/v0/b/metube-120e9.appspot.com/o/test%2F1525039735479_Reto%20perrito.mp4?alt=media&token=8ac8a107-0c8c-467f-97e6-664b2522fb6d");
    this.router.navigateByUrl('/watch');
  }*/

}
