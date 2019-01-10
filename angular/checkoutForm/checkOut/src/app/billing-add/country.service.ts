import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { checkCredentials } from './countryVal';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countryUrl = 'http://192.168.15.160:9090/getCountries';
  private stateUrl = 'http://192.168.15.160:9090/getState/1';

  private checkOutUrl = 'http://192.168.15.160:9090/addUser';

  constructor(
    private httpClient: HttpClient
  ) { }

  getCountry() {
    return this.httpClient.get(this.countryUrl)
  }
  getState(){
    return this.httpClient.get(this.stateUrl)
  }

  // public checkOut(credentials: countryCredentials) {
  //   return this.HttpClient.post(this.checkOutUrl, credentials);
  // }

  public checkUser(credentials: checkCredentials) {
    return this.httpClient.post(this.checkOutUrl, credentials);




  }

}
