import { Crd } from './crd';
import { Component, OnInit, Input ,EventEmitter, Output} from '@angular/core';
 

@Component({
  selector: 'app-mx-crd',
  templateUrl: './mx-crd.component.html',
  styleUrls: ['./mx-crd.component.css']
})
export class MxCrdComponent implements OnInit {

  @Input()
  crd : Crd
  
  @Output()
  crdEv : EventEmitter<Crd> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  goSm(crd : Crd){
    console.log(`titel is ${crd.ttl}`)
    this.crdEv.emit(crd)
  }

}
