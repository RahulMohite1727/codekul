import { LoginCredentials, RegCredentials } from './usertable/user.model';

import { Observable } from 'rxjs';
import { User } from './user.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 private serviceUrl = 'http://192.168.15.160:8909/getAllUser';
 private loginUrl = 'http://192.168.15.160:8909/userLogin';
 private regUrl = 'http://192.168.15.160:8909/registerUser'; 

 
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
  public getAllUser(page, size, sortOrder, sortField): Observable<User[]>{
    const params = new HttpParams()
              .set('page', '0')
              .set('size', '5')
              .set('sortOrder', 'DESC')
              .set('sortField', 'userName');
      console.log(params.toString());
      return this.httpClient.get<User[]>(this.serviceUrl, {params});

  }
}
