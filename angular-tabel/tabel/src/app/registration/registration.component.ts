import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { RegCredentials } from '../usertable/user.model';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})





export class RegistrationComponent implements OnInit {

    public regForm: FormGroup;
    
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      userName: [null, Validators.required],
      email: [null, Validators.required,Validators.email],
      contactNumber: [null, Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[0-9]+')])],
      password:[null, Validators.required]
      // password: [null, [Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$")]] //Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    });
  }
  register(): void {
    const credentials: RegCredentials = {} as RegCredentials;
    console.log(this.regForm);

    if (this.regForm.valid) {
      credentials.userName = this.regForm.controls.userName.value;
      credentials.email = this.regForm.controls.email.value;
      credentials.contactNumber = this.regForm.controls.contactNumber.value;
      credentials.password = this.regForm.controls.password.value;

      this.userService.regUser(credentials).subscribe(response => {
        if (response) {
          this.router.navigate(['login']);
          console.log(response, 'successful');
        }
      });
    }
  }

}
