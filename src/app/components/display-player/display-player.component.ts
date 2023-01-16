import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
player:any={};
id:any;
  constructor(private playerService:PlayerService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
this.id=this.activatedRoute.snapshot.paramMap.get('id')
    this.playerService.displayPlayerById(this.id).subscribe(
      (response) => {
        console.log("here player", response);
        this.player=response;
        console.log("here player", response);
        
      })

  }

}
