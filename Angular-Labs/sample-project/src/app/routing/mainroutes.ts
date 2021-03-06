import { DashboardComponent } from "../dashboard/dashboard.component";
import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { AuthgaurdService } from "../services/authgaurd.service";

export const Mainroutes = [
  { path: '', component: HomeComponent },
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'dashboard',
   canActivate:[AuthgaurdService],
  component: DashboardComponent},
  { path: 'Home', component: HomeComponent },
  { path: 'Customer', loadChildren:()=>import('../customer/customer.module').then(m=>m.CustomerModule) },
  { path: 'Supplier', loadChildren:()=>import('../supplier/supplier.module').then(m=>m.SupplierModule) }
];


