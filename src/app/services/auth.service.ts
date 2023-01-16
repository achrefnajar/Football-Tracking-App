import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthData } from 'backend/models/user.js';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private isUser = false;
  private isAdmin = false;
 public errormsg:any="";
  private token: string;
  private tokenTimer: any;
  private userId: string;
  private userRole: string;
  private authStatusListener = new Subject<boolean>();
 
  private authUser = new Subject<boolean>();
  private authAdmin = new Subject<boolean>();

  public err = new BehaviorSubject<any>(null);


  authURl: string = "http://localhost:3000/users"

  constructor(private httpClient:HttpClient,private router:Router) { 
    var currentUser = (localStorage.getItem('userId'))
    if (currentUser === null) {
      this.isAuthenticated = false;
    } else {
      this.isAuthenticated = true;
      var currentUser = (localStorage.getItem('userRole'))
      if (currentUser === "user") {
        this.isUser = true;
        // this.authClient.next(true);
      } 
      else {
        this.isAdmin = true;
        // this.authAdmin.next(true);
      }
    }

  }
  getToken() {
    return this.token;
  }
  getIsAuth() {
    return this.isAuthenticated;
  }
  getUserId() {
    return this.userId;
  }
  getRole() {
    return this.userRole;
  }
 
  getIsAuthUser() {
    return this.isUser;
  }
  getIsAuthAdmin() {
    return this.isAdmin;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
 
  getAuthUser() {
    return this.authUser.asObservable();
  }
  getAuthAdmin() {
    return this.authAdmin.asObservable();
  }
  // login(user) {
  //   return this.httpClient.post<{mytoken:any, message:string, playload:any}>(`${this.authURl}/login`,user);
  //  }
  
  login(email: string, pwd: string) {
    const authData: AuthData = { email: email, pwd: pwd };
  return  this.httpClient
      .post<{
        token: string; expiresIn: number, userId: string,
        userRole: string
      }>(`${this.authURl}/login`, authData)
      .pipe(map(response => {
        
        this.err.next(null)
        const token = response.token;
        const userRole = response.userRole;
        this.token = token;
        if (response.userRole === "user") {
          this.isUser = true;
          this.authUser.next(true);
        }
        else {
          this.isAdmin = true;
          this.authAdmin.next(true);
        }
        
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.userId = response.userId;
          this.userRole = response.userRole;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() +
            expiresInDuration * 1000);
          this.saveAuthData(token, expirationDate, this.userId, this.userRole);
          if (response.userRole === 'admin') {
            this.router.navigate(["/dashboard"]);
          } else {
            this.router.navigate(["/"]);
          }
          return response
        }
       
      },
        err => {
          this.err.next(err)
       
          
          
          
        }));
  }
  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
   
    this.isUser = false;
    this.isAdmin = false;
    clearTimeout(this.tokenTimer);
    
    this.authUser.next(false);
    this.authAdmin.next(false);
    this.clearAuthData();
    this.router.navigate(["login"]);
  }
  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() -
      now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.userRole = authInformation.userRole;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }
  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId");
    const userRole = localStorage.getItem("userRole");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId,
      userRole: userRole
    }
  }
  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }
  private saveAuthData(token: string, expirationDate: Date, userId:
    string, userRole: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("userId", userId);
    localStorage.setItem("userRole", userRole);
  }
  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
  }

}
