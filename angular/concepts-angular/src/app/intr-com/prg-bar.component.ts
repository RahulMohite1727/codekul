import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prg-bar',
  template: `
  <div class="progress">
  <div class="progress-bar" role="progressbar" [style.width]="prg" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  
  </div>
  `,
  styles: []
})
export class PrgBarComponent implements OnInit {

  @Input()
  prg:string

  constructor() { }

  ngOnInit() {
  }

}
