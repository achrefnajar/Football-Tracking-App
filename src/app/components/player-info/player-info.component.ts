import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
 
  @Input () player:any;
  constructor() { }

  ngOnInit() {
  }

}
