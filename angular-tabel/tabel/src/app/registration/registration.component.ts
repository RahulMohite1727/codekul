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
      email: [null, Validators.required],
      contactNumber: [null, Validators.required],
      password: [null, Validators.required]
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
