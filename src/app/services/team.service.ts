import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamURl: string="http://localhost:3000/teams"
  constructor(private HttpClient:HttpClient) { }

  addTeam(team){
     return this.HttpClient.post<{message:string}>(this.teamURl, team);
  }
  editTeam(team){
    return this.HttpClient.put<{message:string}>(`${this.teamURl}/${team.id}`, team);
  }
  deleteTeam(id){
    return this.HttpClient.delete<{message:string}>(`${this.teamURl}/${id}`);
  }
  getAllTeam(){
    return this.HttpClient.get<{teams:any}>(this.teamURl)
  }
  getTeamById(id){
    return this.HttpClient.get<{teamobj:any}>(`${this.teamURl}/${id}`);
  }
}
