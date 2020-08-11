import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin = false;
  token: string = '';

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if(this.authService.isLoggedIn){
      this.router.navigate(['/recipes']);
    }
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required,]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.authService.signup(this.loginForm.controls.email.value,
      this.loginForm.controls.password.value)
      .subscribe(value => {
        this.token = value["token"]
        this.router.navigate(['/recipes']);
      }, error => {
        console.log(error);
        this.invalidLogin = true;
      })
  }
}
