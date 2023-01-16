import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
T:any=[];
  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayer().subscribe(
      (response) => {
        this.T=response.players;
       
      })
  }

}
