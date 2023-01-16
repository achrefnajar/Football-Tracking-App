import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
team: any={};
teamForm:FormGroup;
  constructor(private teamService:TeamService,private router:Router) { }

  ngOnInit() {
  }

  addTeam() {
    this.teamService.addTeam(this.team).subscribe(
      (response) => {
        console.log("here response ", response);
        this.router.navigate(['dashboard'])
      }
    )
   // var idTeam= JSON.parse(localStorage.getItem('idTeam') || '1');
   // this.team.id = idTeam; 2éme methode de ID
    // console.log("here team", this.team);
    // let teams= JSON.parse(localStorage.getItem("teams") ||'[]');
    // this.team.id = this.generateId(teams) +1;
    // teams.push(this.team);
    // localStorage.setItem('teams', JSON.stringify(teams));

   // localStorage.setItem("idTeam", idTeam +1); 2éme methode de ID
  }

  // teams.filter( obj => {return (obj.id > T[0].id)}) 3éme methode de ID
  generateId(T){
   
      var max;
      if (T.length==0){
          max=0;
      }
        else{  max= T[0].id;
          for (var i = 0; i < T.length; i++) {
  
              if(T[i].id > max){
                  max=T[i].id;
                  }
          }}
       return(max);   
      }


  }


