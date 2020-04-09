import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppAccounts } from './components/accounts.components';
import { AppFund } from './components/fundtransactions.comonent';
import { AppBillPay } from './components/billpayrecharge.components';
import { AppOffers } from './components/offers.component';


const routes: Routes = [
  { path: '', redirectTo: '/accounts', pathMatch: 'full' },
  { path: 'accounts', component: AppAccounts },
  { path: 'fundtransfer', component: AppFund },
  { path: 'billpayrecharge', component: AppBillPay },
  { path: 'offers', component: AppOffers },
  { path: '**', redirectTo: '/accounts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
