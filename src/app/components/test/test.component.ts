import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  testForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private testService:TestService) { }
T:any=[];
  ngOnInit() {
    
    this.testForm=this.formBuilder.group ({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required,Validators.minLength(4)]],
      email: ['', [Validators.email,Validators.required] ],  
  });
  // this.testService.testtable().subscribe((response)=>{
  //   console.log("here response Table test",response.tests);
  //   this.T= response.tests;
  // })
  }
  test(){
    this.testService.addtest(this.testForm.value).subscribe((response)=> {
      console.log("here added with success test",response.message);
    });
    this.testService.testtable().subscribe((response)=>{
      console.log("here response Table test",response.tests);
      this.T= response.tests;
    })
    
  }
}
