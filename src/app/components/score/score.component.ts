import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() score: any;
  constructor() { }

  ngOnInit() {
  }
  scorematch(x: number, y: number) {
    if (x > y) {
      return 'Win'
    }
    else if (x < y) {
      return 'loss'
    }
    else { return 'Draw'; }
  }
  color(a: number,b:Number){
    if(a>b){
      return 'green'
    }
    else if (a<b){
      return 'red'
    }
    else return 'blue'
  }
  teamStyle(a:number,b:number){
    if(a>b){
      return '1'
    }
    else if (a<b){
      return '2'
    }
    else return '3'
  
  }

}
