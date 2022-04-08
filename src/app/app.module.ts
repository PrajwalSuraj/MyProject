import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { PaymentComponent } from './payment/payment.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { LoginComponent } from './login/login.component';
import { DemohomeComponent } from './demohome/demohome.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BillingComponent } from './billing/billing.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { LogComponent } from './log/log.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    PaymentComponent,
    LoginComponent,
    DemohomeComponent,
    SignupComponent,
    ForgotpasswordComponent,
    BillingComponent,
    ThankyouComponent,
    LogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    GooglePayButtonModule,
    MatToolbarModule,
    MatRadioModule
  
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }