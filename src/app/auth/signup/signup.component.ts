import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  invalidLogin: any;
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
  }

  onSubmit() {

  }
}
