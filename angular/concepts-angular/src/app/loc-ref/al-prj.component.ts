import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-al-prj',
  template: `
  <ng-content></ng-content>  
  <p>
      al-prj works!
    </p>
    
  `,
  styles: []
})
export class AlPrjComponent implements OnInit {

  @ContentChild('al')
  al: ElementRef

  constructor() { }

  ngOnInit() {
  }

}
