import { Observable } from 'rxjs';
//import { WeatherService } from './weather.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http : HttpClient
  ) { }


  WeatherInfo(city : string) : Observable<object>{

    return this.http.get(`https://restcountries.eu/rest/v2/name/${city}`)
    //return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7406c21bb1cb9f59d936a59c4e890279`)

  }
}
