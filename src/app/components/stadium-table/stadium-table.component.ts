import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadium-table',
  templateUrl: './stadium-table.component.html',
  styleUrls: ['./stadium-table.component.css']
})
export class StadiumTableComponent implements OnInit {
T:any=[];
  constructor(private stadiumService:StadiumService,private router:Router) { }

  ngOnInit() {
    this.stadiumService.getAllStadium().subscribe(
      (response) => {
        this.T=response.stadiums
      })
  }
  goToEdit(id){
    this.router.navigate([`editStadium/${id}`])
  }
  goTodisplay(id){
    this.router.navigate([`displayStadium/${id}`])
  }
  
  deleteStadium(id){
    //alert(id);
    this.stadiumService.deleteStadium(id).subscribe((response) => {
      console.log("here into msg after dlete",response.message)
      this.stadiumService.getAllStadium().subscribe(
        (response) => {
          this.T=response.stadiums;
        })
    })
   
 
  }
}
