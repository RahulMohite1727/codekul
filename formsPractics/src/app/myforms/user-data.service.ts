import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private serviceUrl= 'https://reqres.in/api/users?page=2';

  constructor(public httpClient: HttpClient) { }

    getUser(){
      return this.httpClient.get(this.serviceUrl)
      }

  getParams(page) {
    return this.httpClient.get(this.serviceUrl, {
      params: new HttpParams().set('page', page)
        
    })

  }
}

