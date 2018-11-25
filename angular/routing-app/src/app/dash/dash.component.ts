import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  usNm : string
  constructor(
    private actRt : ActivatedRoute 
  ) { }

  ngOnInit() {
    this.actRt.params.subscribe(
      prms => this.usNm = prms['usNm']
    )
  
    
  }

}
