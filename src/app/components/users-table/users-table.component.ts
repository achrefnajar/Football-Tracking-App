import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
T:any=[];
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (response) => {
        this.T=response.users;
      })
  }
  gotoDisplay(id){
    this.router.navigate([`profile/${id}`])
  }
  gotoEdit(id){
    this.router.navigate([`editUser/${id}`])

  }
  deleteUser(id){
    //alert(id);
    this.userService.deleteUser(id).subscribe(
      (response) =>{
        console.log('here response after delete', response);
        //send request to get matches after dlete 
        this.userService.getAllUsers().subscribe(
          (reponse) => {
            this.T=reponse.users;
          }
        )
      }
    )

   }

}
