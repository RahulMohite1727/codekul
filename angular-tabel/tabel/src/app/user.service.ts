import { LoginCredentials, RegCredentials } from './usertable/user.model';

import { Observable } from 'rxjs';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 private serviceUrl = 'http://192.168.15.136:8080/getAllUser';
 private loginUrl = 'http://192.168.15.136:8080/userLogin';
 private regUrl = 'http://192.168.15.136:8080//registerUser'; 
 constructor(private httpClient: HttpClient) { }

  getUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.serviceUrl);
  }

  public loginUser(credentials: LoginCredentials) {
    return this.httpClient.post(this.loginUrl, credentials);
  }

  public regUser(credentials: RegCredentials) {
    return this.httpClient.post(this.regUrl, credentials);
  }
}
