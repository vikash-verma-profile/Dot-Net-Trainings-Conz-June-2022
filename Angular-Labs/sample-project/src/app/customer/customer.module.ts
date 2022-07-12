import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { Customerroutes } from '../routing/customerroutes';
import { CustomerComponent } from './customer.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        CustomerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(Customerroutes),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [CustomerComponent]
})
export class CustomerModule { }