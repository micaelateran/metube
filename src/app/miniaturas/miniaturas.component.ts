import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeComponent,  } from '../youtube/youtube.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-miniaturas',
  templateUrl: './miniaturas.component.html',
  styleUrls: ['./miniaturas.component.css']
})
export class MiniaturasComponent implements OnInit {

  constructor(private router:Router,private data: DataService ) { }

  btnClick1 = function() {
        this.data.setVideoID("BVFX7rjgBO8");
        this.router.navigateByUrl('/video');
    }
    btnClick2 = function() {
        this.data.setVideoID("TGx0rApSk6w");
        this.router.navigateByUrl('/video');
    }
    btnClick3 = function() {
        this.data.setVideoID("Zlv1rdcpS9M");
        this.router.navigateByUrl('/video');
    }
    btnClick4 = function() {
        this.data.setVideoID("LrUvu1mlWco");
        this.router.navigateByUrl('/video');
    }
    btnClick5 = function() {
        this.data.setVideoID("o_v9MY_FMcw");
        this.router.navigateByUrl('/video');
    }
    btnClick6 = function() {
        this.data.setVideoID("KRaWnd3LJfs");
        this.router.navigateByUrl('/video');
    }
    btnClick7 = function() {
        this.data.setVideoID("4m1EFMoRFvY");
        this.router.navigateByUrl('/video');
    }
    btnClick8 = function() {
        this.data.setVideoID("CevxZvSJLk8");
        this.router.navigateByUrl('/video');
    }
    btnClick9 = function() {
        this.data.setVideoID("pt8VYOfr8To");
        this.router.navigateByUrl('/video');
    }
    btnClick10 = function() {
        this.data.setVideoID("BR_DFMUzX4E");
        this.router.navigateByUrl('/video');
    }
    btnClick11 = function() {
        this.data.setVideoID("zwT6DZCQi9k");
        this.router.navigateByUrl('/video');
    }
    btnClick12 = function() {
        this.data.setVideoID("MMAppa1cAVo");
        this.router.navigateByUrl('/video');
    }
    btnClick13 = function() {
        this.data.setVideoID("9I9Ar6upx34");
        this.router.navigateByUrl('/video');
    }
    
  ngOnInit() {

    
   }



}
