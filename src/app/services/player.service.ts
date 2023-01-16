import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
playerURL:string="http://localhost:3000/players"
  constructor(private Http:HttpClient) { }
 addplayer(obj){
  return this.Http.post<{message:string}>(this.playerURL,obj)
 }
 getAllPlayer(){
  return this.Http.get<{ players:any}>(this.playerURL);
 }
 displayPlayerById(id){
  return this.Http.get<{player:any}>(`${this.playerURL}/${id}`)
 }
 deletePlayerById(id){
  return this.Http.delete<{message:string}>(`${this.playerURL}/${id}`)
 }
 editPlayer(obj){
  return this.Http.put<{message:string}>(`${this.playerURL}/${obj.id}`, obj)
 }





}
