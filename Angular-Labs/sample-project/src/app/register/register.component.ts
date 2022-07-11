import { Component, OnInit } from '@angular/core';
import { userdata } from '../models/userdata';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  constructor() { }
  registerModel:userdata=new userdata();
  ngOnInit(): void {
  }
  Register(){
    
  }
}
