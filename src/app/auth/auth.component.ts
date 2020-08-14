import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private authInstance: any;
  private user: any;

  ngOnInit() {
  }

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
  }

  async initGoogleAuth(): Promise<void> {
    return  new Promise((resolve) => {
      gapi.load('auth2', resolve);
    }).then(async () => {
      await gapi.auth2
        .init({ client_id: '136432329016-882rg5sca18532vqpu2b24j7m6s0sg43.apps.googleusercontent.com' })
        .then(auth => {
          this.authInstance = auth;
        });
    });
  }

  async authenticate(): Promise<gapi.auth2.GoogleUser> {
    await this.initGoogleAuth();
    return new Promise(async () => {
      await this.authInstance.signIn().then(
        user => {
          this.user = user
          console.log(this.user);
          this.authService.username = this.user['Ot']['Cd'];
          this.authService.email = this.user['Ot']['yu'];
          this.authService.token = this.user['wc']['id_token'];
          this.authService.expiresAt = this.user['wc']['expires_at'];
          this.authService.imageUrl = this.user['Ot']['PK'];
          this.authService.isLoggedIn = true;
          this.router.navigate(['/recipes']);
        },
        error => {});
    });
  }

}
