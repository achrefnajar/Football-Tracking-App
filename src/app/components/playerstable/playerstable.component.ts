import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-playerstable',
  templateUrl: './playerstable.component.html',
  styleUrls: ['./playerstable.component.css']
})
export class PlayerstableComponent implements OnInit {
T:any=[];

  constructor(private playerService:PlayerService,private router:Router) { }

  ngOnInit() {
  this.playerService.getAllPlayer().subscribe(
    (response) => {
      console.log("here all players",response);
      
      this.T=response.players
    })
  }

  goTodisplay(id){
   this.router.navigate([`displayPlayer/${id}`])
  }
  goToEdit(id){
    
    this.router.navigate([`editPlayer/${id}`])
  }
  deletePlayer(id){
    this.playerService.deletePlayerById(id).subscribe(
      (response) => {
        console.log('here response after delete', response);
        this.playerService.getAllPlayer().subscribe(
          (response) => {
            this.T=response.players;
          })
      })
   // alert(id);

  }

}
