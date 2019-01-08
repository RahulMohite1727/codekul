import { credens } from './user.model';
import { UserDataService } from './../user-data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dataforms',
  templateUrl: './dataforms.component.html',
  styleUrls: ['./dataforms.component.sass']
})
export class DataformsComponent implements OnInit {

  //public loginForm: FormGroup
  page=0;
  constructor(
    private formBuilder: FormBuilder,
    private UserDataService : UserDataService 
  ) { }

  userData: credens
  loginForm = new FormGroup({
    id:new FormControl
  });
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      id: [null, Validators.required],
      first_name : [null, Validators.required],
      last_name: [null, Validators.required],
      avatar: [null, Validators.required]
    });
    
    this.UserDataService.getParams(this.page).subscribe(params => {
      this.userData = params as credens
      this.loginForm.patchValue({id: this.userData.data[0].id})
      this.loginForm.patchValue({first_name: this.userData.data[0].first_name})
      this.loginForm.patchValue({last_name: this.userData.data[0].last_name})
      this.loginForm.patchValue({avatar: this.userData.data[0].avatar})

      // if(params){
      //   this.userData = params['page']['data'];
      // }
      console.log(params);
    
    });
    
  }

}
