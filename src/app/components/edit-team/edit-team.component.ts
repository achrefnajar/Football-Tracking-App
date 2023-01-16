import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
team:any= {};

id:any;
teamForm:FormGroup;
  constructor(private activtedRoute:ActivatedRoute,private teamService:TeamService,private router:Router) { }

  ngOnInit() {
//this.team=this.teams.find((obj) => {return obj.id ==this.id});
this.id = this.activtedRoute.snapshot.paramMap.get('id');
     this.teamService.getTeamById(this.id).subscribe(
      (response)=> {
        this.team=response.teamobj;
      })

  }
  editTeam(){
    this.teamService.editTeam(this.team).subscribe(
      (response) => {
        console.log("here edit team", response.message)
      }
    )
    this.router.navigate(['dashboard'])

    console.log('here edit team', this.team);
  }

}
