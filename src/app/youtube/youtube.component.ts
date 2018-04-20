import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  player: YT.Player;
  private id: string = '9pCcT8XQTnc';

  constructor() { }

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
