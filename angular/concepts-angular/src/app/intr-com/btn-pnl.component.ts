import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-pnl',
  template: `
  <button type="button" class="btn btn-primary" (click)="forBtn(1)">Plus</button>
  <button type="button" class="btn btn-danger" (click)="forBtn(2)">Minus</button>
  `,
  styles: []
})
export class BtnPnlComponent implements OnInit {
  
  @Output()
  onBtn : EventEmitter<number> = new EventEmitter()
  // btn: any;

  constructor() { }

  ngOnInit() {
  }
  forBtn(btn : number){
    // if(btn === 1){

    // }
    // if(btn ===2){

    // }
    this.onBtn.emit(btn)
    
  }

}
