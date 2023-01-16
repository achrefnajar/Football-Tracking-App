import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public err = new BehaviorSubject<any>(null);

  user :any={};
  loginForm : FormGroup;
  userId:any;
  userRole:any;
  token:any;
  authListenerSubs: any;
  errormsg: string;
 
  
  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit() {
    
  }
  findUser(email,pwd){
    for (let i = 0; i < this.user.length; i++) {
      if (this.user.email==email && this.user.pwd== pwd) {
        this.findUser=this.user[i];
        break;
      }
      
    }

  }
  // login(){
  // this.authService.login(this.user).subscribe(
  //   (response) => {
  //     console.log("here response after login", response.message)
     
  //     if (response.mytoken) {
  //       this.token = response.mytoken;
  //       this.userId = response.playload._id;
  //       this.userRole = response.playload.role;
  //       localStorage.setItem("token", this.token);
  //   localStorage.setItem("userId", this.userId);
  //   localStorage.setItem("role", this.userRole);
  //       (localStorage.getItem('userId'))
  //       console.log("here response after token", response.playload)
  //       if (response.playload.role == "Client") {
  //         this.router.navigate(['']);
  //       } else {
  //         this.router.navigate(['dashboard']);
  //       }
  //     } else {
  //       this.errormsg = "Please chek email or pwd"
  //     }
  //   //   if (response.isFounded) {
  //   //     if (response.user.role =="Admin") {
  //   //       this.router.navigate(['dashboard']);
  //   //     }
  //   //     else {
  //   //       this.router.navigate(['']);
  //   //     }
        
  //   //   }
  //   //   else {
  //   //     this.errormsg = "please check email or pwd";

  //   //   }
  //    })

   
  // }
  validateLogin() {
    this.authService.login(this.user.email, this.user.pwd).subscribe((response)=>{
  console.log("rers",response);
  
 if (!response) {
  this.errormsg="email or password invalid"
 }

    })
 
  }
    

}
