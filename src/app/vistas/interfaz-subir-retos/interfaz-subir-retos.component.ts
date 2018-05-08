import { Component, OnInit } from '@angular/core';
import generateId from '../../funciones/idGenerator';

@Component({
  selector: 'app-interfaz-subir-retos',
  templateUrl: './interfaz-subir-retos.component.html',
  styleUrls: ['./interfaz-subir-retos.component.scss']
})
export class InterfazSubirRetosComponent implements OnInit {

  idReto: string;

  constructor() { }

  ngOnInit() {
    this.idReto = generateId(20);
  }

}