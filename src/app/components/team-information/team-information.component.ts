import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-information',
  templateUrl: './team-information.component.html',
  styleUrls: ['./team-information.component.css']
})
export class TeamInformationComponent implements OnInit {
team:any;
  id:any;
  


  constructor(private activatedRoute:ActivatedRoute,private teamService:TeamService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    //snapshoot capture route (path) complet id
    this.teamService.getTeamById(this.id).subscribe(
      ( response) => {
          this.team=response.teamobj;
      })


    // for (let i = 0; i < this.team.length; i++) {
    //   if (this.team[i].id == this.id) {
    //     this.teams = this.team[i];
    //     break;
    //   }
    // }
    console.log("here team ", this.team);
  }
  }
  

