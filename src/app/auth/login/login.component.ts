import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginRef', {static: true}) loginElement: ElementRef;
  auth2: any;

  ngOnInit() {
    this.googleInitialize();
  }

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
  }


  googleInitialize() {
    // @ts-ignore
    window.googleSDKLoaded = () => {
      window.gapi.load('auth2', () => {
        this.auth2 = window.gapi.auth2.init({
          client_id: '136432329016-882rg5sca18532vqpu2b24j7m6s0sg43.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLogin();
      });
    };
    ((d, s, id) => {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'google-jssdk');
  }

  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        const profile = googleUser.getBasicProfile();
        this.authService.token = googleUser.getAuthResponse().id_token;
        this.authService.username = profile.getName();
        this.authService.email = profile.getEmail();
        this.authService.imageUrl = profile.getImageUrl();
        this.authService.isLoggedIn = true;
        this.router.navigate(['/recipes']);
      });
  }

}
