import { NgForm,FormGroup,Validators,FormBuilder,FormControl } from "@angular/forms";

export class Customer{
    id:number=0;
    customerCode:string='';
    customerName:string='';
    customerAmount:number=0;
    formCustomerGroup:FormGroup;//Create
    constructor() {
        var _builder=new FormBuilder();
       this.formCustomerGroup=_builder.group({});
       this.formCustomerGroup.addControl("CustomerCodeControl",new FormControl('',Validators.required));

    }
}