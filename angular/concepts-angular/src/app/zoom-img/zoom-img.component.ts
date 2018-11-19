import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zoom-img',
  templateUrl: './zoom-img.component.html',
  styleUrls: ['./zoom-img.component.css']
})
export class ZoomImgComponent implements OnInit {

  @Input('src') src: string;
  @Input('xPos') xPos: number;
  @Input('yPos') yPos: number;

  constructor() {
    this.xPos = 50;
    this.yPos = 50;
  }
  ngOnInit() {
  }

}


