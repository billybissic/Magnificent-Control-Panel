import { Component, OnInit } from '@angular/core';

import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  errorMessage: any;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl(''),
      userPassword: new FormControl(''),
      rememberMe: new FormControl()
    });
  }

  login() {
    console.log('Login function entered.');
  }

}
