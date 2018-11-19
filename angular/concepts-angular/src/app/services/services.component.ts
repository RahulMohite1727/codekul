import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers : [SampleService]
})
export class ServicesComponent implements OnInit {

  cmpCntr:number =0 

  constructor( 
    private sample: SampleService
  ) { }

  ngOnInit() {
  }
 
btnClk(cmpCntr:number){
  this.cmpCntr = this.sample.plus()
  console.log(this.cmpCntr)
} 
}
