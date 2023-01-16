import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-display-stadium',
  templateUrl: './display-stadium.component.html',
  styleUrls: ['./display-stadium.component.css']
})
export class DisplayStadiumComponent implements OnInit {
stadium:any={};
id:any;
  constructor(private stadiumService:StadiumService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    this.stadiumService.getStadiumById(this.id).subscribe((response)=> {
     this.stadium=response.stadium;
    })
  }

}
