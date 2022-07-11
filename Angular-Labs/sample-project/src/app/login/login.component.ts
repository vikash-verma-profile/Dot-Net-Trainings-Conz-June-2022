import { Component, OnInit } from '@angular/core';
import { userdata } from '../models/userdata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginModel:userdata=new userdata();
  constructor() { }

  ngOnInit(): void {
  }
  Login(){
    
  }

}
