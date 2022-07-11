import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { Supplierroutes } from '../routing/supplierroutes';
import { SupplierComponent } from './supplier.component';

@NgModule({
    declarations: [
        SupplierComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(Supplierroutes)
    ],
    providers: [],
    bootstrap: [SupplierComponent]
})
export class SupplierModule { }
