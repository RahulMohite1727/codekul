import { Checkpjo } from './checkboc.model';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private url = 'http://192.168.15.160:9090/getCountries'

  constructor(
    private httpClient: HttpClient
  ) { }

  getCountry() {
    return this.httpClient.get(this.url);
  }


}
