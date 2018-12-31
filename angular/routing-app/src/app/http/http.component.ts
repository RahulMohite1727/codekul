import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Observable, Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class MyHttpComponent implements OnInit {


  cnt : number = 0;
  private chatSub : Subscription
  private intSub : Subscription

  constructor(
    private weather : WeatherService 
  ) { }

  ngOnInit() {
      this.chatObs().subscribe(
        num => console.log(num),
        err => console.log(err),
        () => console.log(`completed`),
      )
      
        

      this.intSub = interval(2000).subscribe(
        cnt => this.cnt++
      )
  }
 chatObs(){
   return Observable.create(
      sub => {
        for (let i = 0; i < 100; i++){
          sub.next(i)
        }
        sub.complete()
      }
   )
 }
 ngOnDestroy() {
  this.chatSub.unsubscribe()
  this.intSub.unsubscribe()
}


onWeather(city : string){
  this.weather.WeatherInfo( city ).subscribe(
    res => console.log( res )
  )
}

}


