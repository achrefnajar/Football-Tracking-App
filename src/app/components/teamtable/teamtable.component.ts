import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teamtable',
  templateUrl: './teamtable.component.html',
  styleUrls: ['./teamtable.component.css']
})
export class TeamtableComponent implements OnInit {

 team:any=[];

  constructor(private router:Router,private teamService:TeamService) { }

  ngOnInit() {
    this.teamService.getAllTeam().subscribe(
      (response) => {
        this.team=response;
      })
  }
  goToDisplay(id){

this.router.navigate([`displayTeam/${id}`])
  }
  goToEdit(id:number){
    this.router.navigate([`editTeam/${id}`])
    alert(id);
  }
  deleteTeam(id){
    this.teamService.deleteTeam(id).subscribe(
      (response) =>{
        console.log('here response after delete', response.message);
        //send request to get matches after dlete 
        this.teamService.getAllTeam().subscribe(
          (reponse) => {
            this.team=reponse;
          }
        )
      }
    )

  }

}
