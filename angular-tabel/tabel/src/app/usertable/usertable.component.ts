
import { UserService } from './../user.service';

import { Observable, from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {MatSort,MatSortModule,MatTabLabel, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import { user} from './Usertable';





  @Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  displayedColumns: string[] = ['userName','email', 'contactNumber', 'password'];
  
  
  userinfo: user[] = [ ];

  sortedData: user[];

  constructor(private UserService : UserService) {
    // this.sortedData = this.userinfo.slice();
  }
  
  ngOnInit() {
    this.UserService.getUser().subscribe(results =>{
      if(results){
        this.userinfo = results['data'];
      }
    })
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
        case 'userName': return compare(a.userName, b.userName, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        case 'contactNumber': return compare(a.mobile, b.contactNumber, isAsc);
        case 'password': return compare(a.password, b.password, isAsc);


      
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}



 


