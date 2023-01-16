import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
id:any;
match:any ;

 
  constructor(private activatedRoute:ActivatedRoute,private matchService:MatchService) { }

  ngOnInit() {
    // get Id from path
    this.id= this.activatedRoute.snapshot.paramMap.get('id');
    //snapshoot capture route (path) complet id
    // call match Service to send request to get object By
    this.matchService.displayMatchById(this.id).subscribe(
      (reponse) => {
        this.match=reponse.match;
      }
    )
    console.log("here id from path ", this.id)
  }

}
