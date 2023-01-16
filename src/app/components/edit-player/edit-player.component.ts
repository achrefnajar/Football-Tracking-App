import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  playerForm:FormGroup
  player:any={};
  id:any;
  constructor(private playerService:PlayerService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
this.id=this.activatedRoute.snapshot.paramMap.get('id')
this.playerService.displayPlayerById(this.id).subscribe(
  (response) => {
    this.player=response;
  })
  }
  editPlayer(){
    this.playerService.editPlayer(this.player).subscribe(
      (response) => {
        console.log("here is edit",response)
       
      })
      this.router.navigate(['dashboard'])
  }


}
