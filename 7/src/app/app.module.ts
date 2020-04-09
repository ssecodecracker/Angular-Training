import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppAccounts } from './components/accounts.components';
import { AppFund } from './components/fundtransactions.comonent';
import { AppBillPay } from './components/billpayrecharge.components';
import { AppOffers } from './components/offers.component';

@NgModule({
  declarations: [
    AppComponent,
    AppAccounts,
    AppFund,
    AppBillPay,
    AppOffers
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
