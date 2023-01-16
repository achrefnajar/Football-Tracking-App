import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  id: any;
  match: any = {};
  //matches= JSON.parse(localStorage.getItem("matchs") || '[]');
  matchForm: FormGroup;
  T: any = [];
  constructor(private activtedRoute: ActivatedRoute,
    private matchService: MatchService, private router: Router) { }

  ngOnInit() {

    this.id = this.activtedRoute.snapshot.paramMap.get('id');
    console.log("here into edit id", this.id);
    
    this.matchService.displayMatchById(this.id).subscribe(
      (response) => {
        this.match = response.match;
      })
    // this.match = this.T.find((obj) => { return obj.id == this.id });
    // for (let i = 0; i < this.T.length; i++) {
    //   if(this.T[i].id==this.id){
    //   this.match=this.T[i];
    //   break;
    // }
    // }

  }
  editMatch() {
    this.matchService.editMatch(this.match).subscribe(
      (response) => {
        console.log("here response from BE", response)
        
      }
    )
    this.router.navigate(['dashboard'])
    console.log("her this new match", this.match);
    // get all objects from LS
    // Search Object By ID
    // Affect new match to finded object
    // LS.setItem
  }

}
