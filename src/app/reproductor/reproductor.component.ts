import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.scss']
})
export class ReproductorComponent implements OnInit {

  private id:string;

  constructor(private data : DataService) { 
    this.id = this.data.getVideoID();
  }

  ngOnInit() {
  }

}
