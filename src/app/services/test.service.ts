import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
testURL:string="http://localhost:3000/tests"
  constructor(private httpClient:HttpClient) { }

 testtable(){
  return this.httpClient.get<{tests:any}>(this.testURL);
 }
 addtest(test){
   return this.httpClient.post<{message:"edded with success test"}>(this.testURL, test);
 }


}
