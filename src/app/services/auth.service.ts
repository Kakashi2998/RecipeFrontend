import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  username: String = 'Login';
  isLoggedIn = false;
  email: string;
  imageUrl = "https://www.w3schools.com/howto/img_avatar.png";
  expiresAt: number;
  method: string;

  constructor() { }

}
