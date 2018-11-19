import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-alc',
  template: `
  <div [class]="cls" role="alert">
  A simple primary alert—check it out!
</div> 
  `,
  styles: []
})
export class AlcComponent implements OnInit {
  cls : string
  constructor(
    private sample :SampleService
  ) { }

  ngOnInit() {
    this.sample.receive(str => {
      this.cls = str
    })
  }

}
