import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
id:any;
signupForm:FormGroup;
  user: any= {};

  constructor(private userService:UserService, private activatedRoute:ActivatedRoute,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.signupForm=this.formBuilder.group ({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required,Validators.minLength(4)]],
      email: ['', [Validators.email,Validators.required] ],
      pwd: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(6)]],
      confirmPwd: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(6),Validators.pattern]],

  })
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserProfile(this.id).subscribe(
      (response)=> {
        this.user=response.user
      })
  }
  editUser(){
    this.userService.editProfile(this.user).subscribe(
      (response) => {
        console.log("here response after edit", response.message);
        
        this.router.navigate(['dashboard'])

      })
  }

}
