import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURl: string = "http://localhost:3000/users"
  constructor(private httpClient: HttpClient) { }
  singnUp(user, img:File) {
    let formData = new FormData();
    formData.append("img", img)
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("pwd", user.pwd);
    formData.append("role", user.role);
    return this.httpClient.post<{message:string}>(`${this.userURl}/signup`,formData);
  }
  // singnUp(user) {
  //   return this.httpClient.post(this.userURl +"/signup", user)
  // }
  getUserProfile(id) {
    return this.httpClient.get<{user:any}>(`${this.userURl}/${id}`);
  }
   login(user) {
    return this.httpClient.post<{user:any, message:string}>(`${this.userURl}/login`,user);
   }
  editProfile(profile) {
    return this.httpClient.put<{message:string}>(`${this.userURl}/${profile.id}`, profile);
  }
  deleteUser(id) {
    return this.httpClient.delete(`${this.userURl}/${id}`)
  }
  getAllUsers() {
    return this.httpClient.get<{users:any}>(this.userURl)
  }
}
