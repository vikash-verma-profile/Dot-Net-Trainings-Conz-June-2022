import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl="https://localhost:44318/api/login/register";
  private _loginUrl="https://localhost:44318/api/login/login";

  constructor(private http:HttpClient,private _router:Router) { }

  loginUser(user:any)
  {
    return this.http.post<any>(this._loginUrl,user);
  }
  regsiterUser(user:any)
  {
    return this.http.post<any>(this._registerUrl,user);
  }
  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
