import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  templateUrl: './customer.component.html'
})
export class CustomerComponent {

  constructor(private http:HttpClient) {
   

  }
  title = 'sample-project';
  samplename = "Vikash Verma";

  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();

  AddCustomer() {
    // for(let i=0;i<this.CustomerModels.length;i++){
    //   if(this.CustomerModel.customerCode==this.CustomerModels[i].customerCode){
    //     this.CustomerModels=this.arrayRemove( this.CustomerModels,this.CustomerModel)
    //   }
    // }
    // this.CustomerModels.push(this.CustomerModel);
    // console.log(this.CustomerModels);
    var customerdto={
      customerCode:this.CustomerModel.customerCode,
      customerAmount:Number(this.CustomerModel.customerAmount),
      customerName:this.CustomerModel.customerName
    }
    console.log(customerdto);
    console.log(this.CustomerModel);
    this.http.post("https://localhost:44318/api/Customer",customerdto).subscribe(res=>console.log(res),res=>console.log(res));
    this.CustomerModel = new Customer();
  }

  EditCustomer(cust: Customer) {
    this.CustomerModel = cust;
  }
  DeleteCustomer(cust: Customer) {
    this.CustomerModels=this.arrayRemove( this.CustomerModels,Customer)
  }

  arrayRemove(arr:any,value:any){
    return arr.filter(function(sample:any){
      return sample!=value;
    });
  }
}
