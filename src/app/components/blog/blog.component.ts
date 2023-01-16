import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog= [{id: 1,date: "25/04/1994", description: "nice", title: "ng node"},
  {id: 2,date: "25/04/2022", description: "bien", title: "bonjour"},
  {id: 3,date: "06/12/2020", description: "grave", title: "note"}];
  constructor() { }
  
  ngOnInit() {
  }

}
