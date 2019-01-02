import { UserService } from './../user.service';

import { Observable, from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {MatSort,MatSortModule,MatTabLabel} from '@angular/material';
import {Sort} from '@angular/material';


export interface user {
  
  name: string;
  username: string;
  email: string;
  }


  @Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'username', 'email'];
  
  
  userinfo: user[] = [
    {name: 'Rahul', username: 'Rahul', email: 'Rahul@gmail.com'},
    {name: 'Tushar', username: 'Tushar', email: 'Tushar@gmail.com',},
    {name: 'Eclair', username: 'Eclair', email:'Eclair@gmail.com'},
    {name: 'Cupcake', username: 'Cupcake', email:'Cupcake@gmail.com'},
    {name: 'Gingerbread', username: 'Gingerbread', email: 'Gingerbread@gmail.com'},
  ];

  sortedData: user[];

  constructor() {
    this.sortedData = this.userinfo.slice();
  }
  
  ngOnInit() {
  }


  sortData(sort: Sort) {
    const data = this.userinfo.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'username': return compare(a.username, b.username, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
      
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


  //displayedColums = ['name','username','email'];
  // dataSource =[{
  //   name:"OM",
  //   username:"omkk",
  //   email:"emil"
  // }, {
  //   name:"OM",
  //   username:"omkk",
  //   email:"emil"
  // }, {
  //   name:"OM",
  //   username:"omkk",
  //   email:"emil"
  // }]

 


