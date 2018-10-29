import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loc-ref',
  templateUrl: './loc-ref.component.html',
  styleUrls: ['./loc-ref.component.css']
})
export class LocRefComponent implements OnInit {
  
  @ViewChild('nm')
  nm :ElementRef 
  val :string

  
  constructor() { }

  ngOnInit() {
  
  }
  btnClk(val : string){
    //this.val = val
    console.log(this.nm)
    this.val = this.nm.nativeElement.value
  }

}
