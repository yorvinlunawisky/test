import { Injectable, inject } from '@angular/core';
import { UserModel } from '../../models/user.mode';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { jwtDecode } from 'jwt-decode';
import { UserTokenModel } from '../../models/user-token';
import { LoginData } from '../../models/login-data';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL = environment.API_URL;
  decodedToken: UserTokenModel = {} as UserTokenModel;
  http = inject(HttpClient);
  router = inject(Router);
  usersList: UserModel[] = [];

  login(data: LoginData) {
    return this.http.post(`${this.API_URL}/Account/login`, data).pipe(
      map((response) => {
        if (response) {
          localStorage.setItem('token', (response as any).data.jwToken);
        }
        this.getDecodedToken = jwtDecode(this.getToken() as string);
      })
    );
  }

  addUserHandler(newUser: UserModel) {
    return this.http.post(`${this.API_URL}/users`, newUser);
  }

  getToken() {
    return localStorage.getItem('token') as string;
  }
  getDecodedToken(): UserTokenModel {
    return jwtDecode(this.getToken());
  }
  isUserLoggedIn() {
    return !!this.getToken();
  }
  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
