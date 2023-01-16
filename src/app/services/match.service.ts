import { HttpClient } from '@angular/common/http';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// Service de livraison
export class MatchService {
  //matchURl: string="Adresse du serveur BE"
  // matchURL: BE server Adress
  matchURl: string = "http://localhost:3000/matches"
  // HttpClient module d'envoie de req (request) 
  // et reception de res (response)
  constructor(private Http: HttpClient) { }

  // request to add object (reponse: message)
  addMatch(obj) {
    return this.Http.post<{ message: string }>(this.matchURl, obj);
  }

  // request to add object (reponse: messsage)
  editMatch(obj) {
    return this.Http.put<{ error: string }>(`${this.matchURl}/${obj.id}`, obj);
  }

  //reponse  :one object
  displayMatchById(id) {
    return this.Http.get<{ match: any }>(`${this.matchURl}/${id}`)
    // return this.Http.get(this.matchURl+ /${id}`)
  }
  // request to delete object By Id (reponse: message)
  deleteMatchById(id) {
    return this.Http.delete<{ message: string }>(`${this.matchURl}/${id}`)
  }

  // reponse : arrray of objects
  getAllMatches() {
    return this.Http.get<{ matches: any }>(this.matchURl);
  }
  searchMatches(obj){
    return this.Http.post<{ matches:any }>(`${this.matchURl}/search`, obj)
  }
  getData(){
    return this.Http.get<{matchs:any}>(`${this.matchURl}/matchData`);
  }


}
