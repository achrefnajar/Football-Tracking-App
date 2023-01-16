import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-data-match',
  templateUrl: './data-match.component.html',
  styleUrls: ['./data-match.component.css']
})
export class DataMatchComponent implements OnInit {
data:any=[];
values:any;
  constructor(private matchService:MatchService) { }

  ngOnInit() {
  this.matchService.getData().subscribe((response) => {
    console.log("here data Match", response.matchs)
    this.data= response.matchs;
    console.log("here data", response.matchs)
     
//     var json = this.data
// var obj = JSON.parse(json);
// var values = Object.keys(obj).map(function (key) { return obj[key]; });
 
  })
  
  
  }

}
