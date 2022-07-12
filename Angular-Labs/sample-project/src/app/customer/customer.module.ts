import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { Customerroutes } from '../routing/customerroutes';
import { CustomerComponent } from './customer.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from '../services/token-interceptor.service';

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
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
    bootstrap: [CustomerComponent]
})
export class CustomerModule { }
