import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { DemohomeComponent } from './demohome/demohome.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LogComponent } from './log/log.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {path:'', redirectTo:'demohome',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'payment', component: PaymentComponent},
  {path:'login', component: LoginComponent},
  {path:'demohome',component:DemohomeComponent},
  {path:'signup', component: SignupComponent},
  {path:'forgotpassword', component: ForgotpasswordComponent},
  {path:'billing',component:BillingComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path:'log',component:LogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }