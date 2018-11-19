import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private cntr: number = 0
  private em: EventEmitter<string>  = new EventEmitter()
  constructor() { }


  plus() {
    return this.cntr++
  
  }
  send(str : string){
    this.em.emit(str)
  }
  receive(){
    this.em.subscribe(str=>console.log(str))
  }
}