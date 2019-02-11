import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards = [
    {
      id: 1,
      cardHead:0,
      cardContent:'Enquiry Due For Follow Up',
    },
    {
      id: 2,
      cardHead:2,
      cardContent: 'Modified PO',
    },
    {
      id: 3,
      cardHead:25,
      cardContent: 'Pending PG PO for Approval',
    },
    {
      id: 4,
      cardHead:0,
      cardContent: 'Approval Purchase return claim',
    },
    {
      id: 5,
      cardHead:0,
      cardContent: 'Pending Port PO for Approval',
    },
    {
      id: 6,
      cardHead:0,
      cardContent: 'Pending sale order to dilivery Challan',
    },
    {
      id: 7,
      cardHead:814,
      cardContent: 'New Material',
    },
    {
      id: 8,
      cardHead:89,
      cardContent: 'Draft Enquery',
    },
    {
      id: 9,
      cardHead:2,
      cardContent: 'Pending PG Invoice for GRN',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
