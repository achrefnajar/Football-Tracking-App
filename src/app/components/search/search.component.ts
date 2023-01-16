import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm:FormGroup;
  T:any;
  constructor(private formBuilder:FormBuilder,private matchSevice:MatchService) { }

  ngOnInit() {
    this.searchForm=this.formBuilder.group ({
      scoreone: ['', [Validators.required]],
      scoretwo: ['',[Validators.required,]],
  })
  }
  search(){
    console.log("here search ",this.searchForm.value);
    this.matchSevice.searchMatches(this.searchForm.value).subscribe(
      (response) => {
        console.log("here search ",response.matches);
        
        this.T=response.matches;
      });
  }

}
