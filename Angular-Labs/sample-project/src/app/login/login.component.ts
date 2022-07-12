import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userdata } from '../models/userdata';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginModel: userdata = new userdata();
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  Login() {
    this._auth.loginUser(this.loginModel).subscribe(res => {
      localStorage.setItem('token', res.token);
      this._router.navigate(['/dashboard']);
    }, res => console.log(res));
  }

}
