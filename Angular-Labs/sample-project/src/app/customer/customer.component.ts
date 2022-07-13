import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  templateUrl: './customer.component.html'
})
export class CustomerComponent {

  constructor(private http: HttpClient) {


  }
  ngOnInit(): void {
    this.GetCustomerData();
  }

  GetCustomerData() {
    this.http.get("https://localhost:44318/api/Customer").subscribe(res => this.GetFromServer(res), res => console.log(res));
  }
  GetFromServer(res: any) {
    console.log(res);
    this.CustomerModels = res;
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
    var customerdto = {
      customerCode: this.CustomerModel.customerCode,
      customerAmount: Number(this.CustomerModel.customerAmount),
      customerName: this.CustomerModel.customerName
    }
    console.log(customerdto);
    console.log(this.CustomerModel);
    this.http.post("https://localhost:44318/api/Customer", customerdto).subscribe(res => { this.GetCustomerData(); console.log(res) }, res => console.log(res));
    this.CustomerModel = new Customer();
  }

  EditCustomer(cust: Customer) {
    this.CustomerModel = cust;
  }
  DeleteCustomer(cust: Customer) {
    console.log(cust);
    let httparms = new HttpParams().set("Id", cust.id);
    let options = { params: httparms };
    // this.CustomerModels=this.arrayRemove( this.CustomerModels,Customer)
    this.http.delete("https://localhost:44318/api/Customer/delete", options).subscribe(res => { this.GetCustomerData(); console.log(res) }, res => console.log(res));

  }

  arrayRemove(arr: any, value: any) {
    return arr.filter(function (sample: any) {
      return sample != value;
    });
  }

  hasError(typeofvalidator:string,controlname:string):Boolean{
    return this.CustomerModel.formCustomerGroup.controls[controlname].hasError(typeofvalidator);
  }
}
