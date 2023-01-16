import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamApiService {
teamApiURL:string="http://localhost:3000/teamApi"
  constructor(private httpClient: HttpClient) { }
  getTeamApi(){
    return this.httpClient.get<{teams:any}>(this.teamApiURL);
  }
}
