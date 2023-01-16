import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 path:string
  signupForm:FormGroup;
  msgError:any;
  imagePreview:any;
  
  constructor(private  formBuilder:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.path = this.router.url
    this.signupForm=this.formBuilder.group ({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required,Validators.minLength(4)]],
      email: ['', [Validators.email,Validators.required] ],
      pwd: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(6)]],
      confirmPwd: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(6),Validators.pattern]],
      img:[''],
  })
    //alert('Hello');
  }
  signup() {
    if (this.path == "/register") {
      this.signupForm.value.role = "user" 
    }
    else{
      this.signupForm.value.role = "admin"
    }
    this.userService.singnUp(this.signupForm.value, this.signupForm.value.img).subscribe(
      (response) => {
        console.log("here response after signup", response.message);
        if (response.message == "Email Exist") {
         this.msgError = response.message
        } else{
          this.router.navigate(['login']);
        }
        
      })
     console.log("here user object", this.signupForm.value);
   
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }

}
