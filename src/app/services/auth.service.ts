import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  username: String = 'Login';
  isLoggedIn = false;
  email: string;
  imageUrl: string;
  expiresAt: number;

  constructor(private http: HttpClient) { }

  signup(username: string, password: string){
    return this.http.post('http://localhost:8080/authenticate', {
      "username":username,
      "password":password
    }).pipe(tap(x => {
      this.token = x['token'];
      this.isLoggedIn = true;
      this.username = username;
    }));
  }
}
