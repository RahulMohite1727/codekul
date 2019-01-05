import { UserDataService } from './../user-data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dataforms',
  templateUrl: './dataforms.component.html',
  styleUrls: ['./dataforms.component.sass']
})
export class DataformsComponent implements OnInit {

  public loginForm: FormGroup
  page=0;
  constructor(
    private formBuilder: FormBuilder,
    private UserDataService : UserDataService 
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      id: [null, Validators.required],
      first_name : [null, Validators.required],
      last_name: [null, Validators.required],
      avatar: [null, Validators.required]
    });
    this.UserDataService.getParams(this.page).subscribe((params) => {
      console.log(params);
    
    });
    
  }

}
