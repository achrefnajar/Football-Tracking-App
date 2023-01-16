import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news :any= [];
  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayer().subscribe((response)=>{
      this.news = response.players;
    })
  }

}
