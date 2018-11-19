import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-drp',
  template: `
  <div class="dropdown [ngClass]="{show:isSh}">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"      aria-haspopup="true" aria-expanded="false">
         Dropdown button
    </button>
   <div class="dropdown-menu show" aria-labelledby="dropdownMenuButton" [ngClass]="{show:isSh}">
      <a class="dropdown-item" (click)="myClk(1)">info</a>
      <a class="dropdown-item" (click)="myClk(2)">Danger</a>
      <a class="dropdown-item" (click)="myClk(3)">Warning</a>
   </div>
  </div>  
  `,
  styles: []
})
export class DrpComponent implements OnInit {
  
  isSh: false
  constructor(
    private sample : SampleService
  ) { }

  ngOnInit() {
  }
  myClk(num : number){
    if(num === 1)
    this.sample.send('alert alert-info')
    else if (num === 2)
    this.sample.send('alert alert-danger')
    else
    this.sample.send('alert alert-warning')  
  }

}
