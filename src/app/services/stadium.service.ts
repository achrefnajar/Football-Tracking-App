import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {
  stadiumURl: any="http://localhost:3000/stadiums";

  constructor(private Http: HttpClient) { }

  addStadium(obj){
    return this.Http.post<{message:string}>(this.stadiumURl, obj);
  }
  getAllStadium(){
    return this.Http.get<{stadiums:any}>(this.stadiumURl);
  }
  deleteStadium(id){
      return this.Http.delete<{message:string}>(`${this.stadiumURl}/${id}`)
  }
  getStadiumById(id){
    return this.Http.get<{stadium:any}>(`${this.stadiumURl}/${id}`)
   }
  editStadium(obj){
    return this.Http.put<{message:string}>(`${this.stadiumURl}`, obj)
  }
  }
  
