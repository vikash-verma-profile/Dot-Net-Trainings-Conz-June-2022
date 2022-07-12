import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userdata } from '../models/userdata';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  constructor(private _auth: AuthService, private _router: Router) { }
  registerModel: userdata = new userdata();
  ngOnInit(): void {
  }
  Register() {
    this._auth.regsiterUser(this.registerModel).subscribe(res => {
      localStorage.setItem('token', res.token);
      this._router.navigate(['/dashboard']);
    }, res => console.log(res));
  }
}
