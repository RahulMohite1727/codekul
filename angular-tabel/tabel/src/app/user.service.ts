import { Observable } from 'rxjs';
import { User } from './usertable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 private serviceUrl=""
  constructor(private http: HttpClient) { }

  grtUser():Observable<User[]>{
    return this.http.get<User[]>(this.serviceUrl);

  }
}
