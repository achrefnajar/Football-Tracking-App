import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matchtable',
  templateUrl: './matchtable.component.html',
  styleUrls: ['./matchtable.component.css']
})
export class MatchtableComponent implements OnInit {

  T: any = [];
 
    pageOfItems: Array<any>;

  constructor(private router: Router, private matchService: MatchService,) { }

  ngOnInit() {
     // an example array of 150 items to be paged
     //this.items = Array(50).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));

    this.matchService.getAllMatches().subscribe(
      (response) => {
        console.log("here response", response);
        
        this.T = response.matches;
        
      } );
  }
  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;
    }

  goToDisplay(id) {
    
    this.router.navigate([`displayMatch/${id}`]);


  }

  goToEdit(id: number) {

    this.router.navigate([`editMatch/${id}`]);
  }


  color(a: number, b: Number) {
    if (a > b) {
      return 'green'
    }
    else if (a < b) {
      return 'red'
    }
    else return 'blue'
  }
  deleteMatch(id){
    //alert(id);
    this.matchService.deleteMatchById(id).subscribe(
      (response) =>{
        console.log('here response after delete', response.message);
        //send request to get matches after dlete 
        this.matchService.getAllMatches().subscribe(
          (reponse) => {
            this.T=reponse.matches;
          }
        )
      }
    )

   }
}
