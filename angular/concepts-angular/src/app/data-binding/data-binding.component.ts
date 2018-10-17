import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  nm = 'codekul.com'
  public num1: number = 5;
  public num2: number = 10;
  amount = 100
  typ = 'button'
  cls = 'btn btn-primary'
  constructor() {

  }

  ngOnInit() {
  }
  clickMe(ev: any){
    console.log('Clicked')
    console.log(ev)
  }

}
