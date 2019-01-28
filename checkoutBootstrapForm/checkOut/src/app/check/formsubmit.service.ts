import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Checkpjo } from './checkboc.model';

@Injectable({
  providedIn: 'root'
})
export class FormsubmitService {
  formurl = 'http://192.168.15.160:9090/addUser'
  constructor(
    private httpClient: HttpClient
  ) { }
  formSubmit(creden: Checkpjo) {
    return this.httpClient.post(this.formurl, creden);
  }
}
