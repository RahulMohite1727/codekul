import { LoginCredentials } from './../usertable/user.model';
import { UserService } from './../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    })
  }


  login(): void {
    let credentials: LoginCredentials = {} as LoginCredentials;
console.log(this.loginForm);

    if (this.loginForm.valid) {
      credentials.email = this.loginForm.controls.email.value;
      credentials.password = this.loginForm.controls.password.value;

      this.userService.loginUser(credentials).subscribe(response => {
        if (response) {
            console.log(response, "asdasdasdadasdda");
            
        }
      })
    }

  }
}