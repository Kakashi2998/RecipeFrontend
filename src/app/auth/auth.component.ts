import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {async} from "@angular/core/testing";
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService} from "angularx-social-login";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe(value => {
      console.log(value);
      this.authService.method = value['provider'];
      this.authService.username = value['name'];
      this.authService.email = value['email'];
      this.authService.imageUrl = value['photoUrl'];
      if(this.authService.method === 'GOOGLE'){
        this.authService.token = value['idToken']
      }
      else{
        this.authService.token = value['authToken']
      }
      this.authService.isLoggedIn = true;
      this.router.navigate(['/recipes'])
    })
  }

  constructor(private socialAuthService: SocialAuthService, private authService: AuthService, private router: Router) { }


  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }


}
