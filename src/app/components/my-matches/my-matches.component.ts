import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-my-matches',
  templateUrl: './my-matches.component.html',
  styleUrls: ['./my-matches.component.css']
})
export class MyMatchesComponent implements OnInit {
  T:any =[];
    
  constructor(private matchService : MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe((response)=>{
      this.T = response.matches
    })
  }

}
