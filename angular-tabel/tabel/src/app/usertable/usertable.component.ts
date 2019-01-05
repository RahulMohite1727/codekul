import { getAllUser } from './user.model';

import { UserService } from './../user.service';

import { Observable, from } from 'rxjs';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatSortModule, MatTabLabel, MatTableDataSource, MatPaginator } from '@angular/material';
import { Sort } from '@angular/material';
import { user } from './Usertable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  

  displayedColumns: string[] = ['userName', 'email', 'contactNumber', 'password'];

  userinfo: user[] = [];

  userAlldata: Object;

  sortedData: user[];

  page = '';
  size = '';
  sortOrder = '';
  sortField = '';

  loading = false;
  errorMessage = '';
  repos: any[];

  constructor(private UserService: UserService,
    //private ActivatedRoute: ActivatedRoute

  ) {
    this.sortedData = this.userinfo.slice();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    
    this.UserService.getUser().subscribe(results => {
      if (results) {
        this.userinfo = results['List']['content'];
        this.userAlldata = results['List'];
        // this.userinfo.paginator = this.paginator;
      }
    })
    // this.ActivatedRoute.queryParams.subscribe(params => {
    //   let param1 = params['page'];
    //   let param2 = params['size'];
    //   let param3 = params['sortOrder'];
    //   let param4 = params['sortField'];

    // });
  }
  public getAllUser() {

    this.loading = true;
    this.errorMessage = '';
    this.UserService.getAllUser(this.page, this.size, this.sortOrder, this.sortField).subscribe((response) => { this.repos = response; }, (error) => { this.errorMessage = error.message; this.loading = false; },
      () => { this.loading = false; })


  }


  sortData(sort: Sort) {
    const data = this.userinfo.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.userinfo = data.sort((a, b) => {
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
  pageChange(event) {
    console.log('event', event);
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
