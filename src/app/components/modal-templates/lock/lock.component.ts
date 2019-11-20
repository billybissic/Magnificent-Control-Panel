import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, FormControlName} from '@angular/forms';

@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.scss']
})
export class LockComponent implements OnInit {

  unlockForm: FormGroup;
  errorMessage: any;

  constructor() { }

  ngOnInit() {
    this.unlockForm = new FormGroup({
      userPassword: new FormControl(''),
    });
  }

  unlock() {

  }

}
