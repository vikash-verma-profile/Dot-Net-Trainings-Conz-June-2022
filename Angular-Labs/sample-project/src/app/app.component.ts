import { Component } from '@angular/core';
import { Customer } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-project';
  samplename="Vikash Verma";

  CustomerModel:Customer=new Customer();
  CustomerModels:Array<Customer>=new Array<Customer>();

  AddCustomer(){
    this.CustomerModels.push(this.CustomerModel);
    console.log(this.CustomerModels);
    this.CustomerModel=new Customer();
  }
}
