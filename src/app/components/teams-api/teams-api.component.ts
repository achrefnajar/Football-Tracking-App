import { Component, OnInit } from '@angular/core';
import { TeamApiService } from 'src/app/services/team-api.service';

@Component({
  selector: 'app-teams-api',
  templateUrl: './teams-api.component.html',
  styleUrls: ['./teams-api.component.css']
})
export class TeamsApiComponent implements OnInit {
  T: any ;
 
  pageOfItems: Array<any>;
  constructor(private teamApiService:TeamApiService) { }

  ngOnInit() {
    this.teamApiService.getTeamApi().subscribe((response)=> {
      console.log("here response of team Api",response.teams)
           this.T=response.teams;
    })
  }
  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;
    }

}
