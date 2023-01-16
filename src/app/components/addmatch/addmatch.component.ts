import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-addmatch',
  templateUrl: './addmatch.component.html',
  styleUrls: ['./addmatch.component.css']
})
export class AddmatchComponent implements OnInit {
  //object that will contains scoreOne,scoreTwo...
  match: any = {};
  //form ID
  matchForm: FormGroup;
  T:any=[];
  stadiumId:any;
  constructor(private matchService: MatchService, private router: Router,private stadiumService:StadiumService) { }


  ngOnInit() {
    this.stadiumService.getAllStadium().subscribe(
      (response) => {
        this.T=response.stadiums;
        console.log("here all staium", response.stadiums)
      })

  }

  // function that will be called when btn is clicked
  addMatch() {
    console.log("here match",this.match.stadiumId)
    this.match.stadiumId=this.stadiumId;
    this.matchService.addMatch(this.match).subscribe(
      (response) => {
        console.log("here response after adding ", response.message);
        this.router.navigate(['dashboard'])
      }
    )
  }
  onSelect(event){
   // console.log("here event", event.target.value);
    this.stadiumId = event.target.value
  }
  generateId(T) {

    var max;
    if (T.length == 0) {
      max = 0;
    }
    else {
      max = T[0].id;
      for (var i = 0; i < T.length; i++) {

        if (T[i].id > max) {
          max = T[i].id;
        }
      }
    }
    return (max);
  }



}
