import { Component, OnInit } from '@angular/core';
import { Crd } from '../mx-crd/crd';

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
  anyThing: string
  crd : Crd
  ClkCrd : string
  constructor() {
    this.crd = new Crd()
    this.crd.imgUrl='https://www.traccar.org/images/server/feature-server.svg'
    this.crd.ttl='server'
    this.crd.msg=`Traccar software provides high performance and stability on Windows, Linux or any other platform. The server can be self-hosted in the cloud or on-premise. We also provide a number of hosted options with professional support.`
  }

  ngOnInit() {
  }
  clickMe(ev: any){
    console.log('Clicked')
    console.log(ev)
  }
onCardClick(crd : Crd) {
  this.ClkCrd = crd.ttl
}
}
