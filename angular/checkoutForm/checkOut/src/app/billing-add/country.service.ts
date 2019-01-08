import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { checkCredentials } from './countryVal';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countryUrl = ''
  private stateUrl = ''

  private checkOutUrl = ''

  constructor(
    private httpClient: HttpClient
  ) { }

  getCountry() {
    return this.httpClient.get(this.countryUrl)
  }

  // public checkOut(credentials: countryCredentials) {
  //   return this.HttpClient.post(this.checkOutUrl, credentials);
  // }

  public checkUser(credentials: checkCredentials) {
    return this.httpClient.post(this.checkOutUrl, credentials);




  }

}
