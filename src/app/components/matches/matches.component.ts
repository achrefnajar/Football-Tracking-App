import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: any = [];


  constructor(private MatchService: MatchService) { }

  ngOnInit() {
    this.MatchService.getAllMatches().subscribe
      ((response) => {
        //response :Array of objects
        console.log("here response", response);
        this.matches = response.matches;
      }
      )
  };

}
