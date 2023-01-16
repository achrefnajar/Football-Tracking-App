import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {

  playerForm:FormGroup;
  player:any= {};
  constructor(private playerService:PlayerService,private router:Router) { }

  ngOnInit() {
  }
  addplayer(){
   this.playerService.addplayer(this.player).subscribe(
    (response) => {
      console.log("here is add players", response.message);
      this.router.navigate(['dashboard']);
    })
//     let players= JSON.parse(localStorage.getItem("players") || '[]');
//     this.player.id= this.generateId(players) +1;
//     players.push(this.player);
//     localStorage.setItem("players", JSON.stringify(players));
// console.log(this.player)
 }
 



}
