import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  T:any= [];
  
  constructor(private matchService:MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      (response) => {
        console.log("here response", response);
        
        this.T = response.matches;
        
      } );
    
  }

}
