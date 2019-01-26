import { HttpClient,HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultifileService {
 private readonly fileuploadUrl='http://192.168.15.161:8000/uploadFile';

  constructor(
    private httpClient:HttpClient
  ) { }

  // saveFiles(total_form)
  // {
  //   return this.httpClient.post(this.fileuploadUrl,total_form);
  // }
  upload(body){
    
    return this.httpClient.post(this.fileuploadUrl,body)
  }
}
