import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateserviceService {
private stateurl='http://192.168.15.160:9090/getState/1'
  
constructor(
    private httpClient:HttpClient
  ) { }

  getState(){
   return this.httpClient.get(this.stateurl);
  }
}
