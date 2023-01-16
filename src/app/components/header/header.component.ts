import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userIsAuthenticated = false;
 
  UserIsAuthenticated:any;
  adminIsAuthenticated:any;
 private authListenerSubs: Subscription;
 
 private authUser: Subscription;
 private authAdmin: Subscription;
 profile: any;
 username: string;
 profileisSet = false;
 role:any;
 T:any=[];
 userId:any;
 user:any={};

  constructor(public auth: AuthService,) { }

  ngOnInit() {
    this.userIsAuthenticated = this.auth.getIsAuth();
    console.log('here auth', this.userIsAuthenticated);
    this.authListenerSubs = this.auth
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
    this.userIsAuthenticated = isAuthenticated;
    });
    this.adminIsAuthenticated = this.auth.getIsAuthAdmin();
 console.log('here auth Admin', this.adminIsAuthenticated);
 this.authAdmin = this.auth .getAuthAdmin().subscribe(isAdmin => {
     this.adminIsAuthenticated = isAdmin;
   });
      this.UserIsAuthenticated = this.auth.getIsAuthUser();
      console.log('here auth User', this.UserIsAuthenticated );
      this.authUser = this.auth .getAuthUser().subscribe(isUser => {
          this.UserIsAuthenticated  = isUser;
        });
  }
  onLogout() {
    this.auth.logout();
    }
   

  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
    this.authUser.unsubscribe();
    this.authAdmin.unsubscribe();
    this.role=localStorage.getItem("userRole")
  }

}
