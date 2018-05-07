import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  login: boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.login = this.data.getLogin();
  }

}
