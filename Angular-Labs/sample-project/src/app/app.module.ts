import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';
import { RouterModule } from '@angular/router';
import { Mainroutes } from './routing/mainroutes';

@NgModule({
  declarations: [
    CustomerComponent,
    SupplierComponent,
    HomeComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Mainroutes)
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
