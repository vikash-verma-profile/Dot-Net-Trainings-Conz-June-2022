import { HomeComponent } from "../home/home.component";

export const Mainroutes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Customer', loadChildren:()=>import('../customer/customer.module').then(m=>m.CustomerModule) },
  { path: 'Supplier', loadChildren:()=>import('../supplier/supplier.module').then(m=>m.SupplierModule) }
];


