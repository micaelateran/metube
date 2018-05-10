import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../servicios/data.service';
import { DatabaseService } from '../../servicios/database.service';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Reto } from '../../modelos/Reto';

@Component({
  selector: 'app-interfaz-retos',
  templateUrl: './interfaz-retos.component.html',
  styleUrls: ['./interfaz-retos.component.scss']
})
export class InterfazRetosComponent implements OnInit {

  coleccionDeRetos: AngularFirestoreCollection<Reto>;
  retosObs: Observable<Reto[]>;

  constructor(private router:Router, private data: DataService, public database:DatabaseService, private afs: AngularFirestore) { }

  ngOnInit() {
    this.coleccionDeRetos = this.afs.collection('Retos');
    this.retosObs = this.coleccionDeRetos.valueChanges();
  }

  listar(id: string): void{
    this.data.setRetoID(id);
    this.router.navigateByUrl('list?' + id);
  }

}
