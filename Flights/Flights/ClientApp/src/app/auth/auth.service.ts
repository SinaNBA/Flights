import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  currentUser?: User; // keep it nullable because sometimes user may not be login

  LoginUser(user: User) {
    console.log('Log in the user with email ' + user.email);
    this.currentUser = user;
  }
}
interface User {
  email?: null | string;
}
