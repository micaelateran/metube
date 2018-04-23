import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  player: YT.Player;

  private id:string;
  constructor(private data : DataService) { 

   this.id = this.data.getVideoID();

  }

  ngOnInit() {
    

  }

	savePlayer (player) {
    this.player = player;
    console.log('Video URL: ', player.getVideoUrl())
	}
  onStateChange(event){
    console.log('player state', event.data);
  }

}
