import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/userComponent/userComponent';
import { AddressComponent } from './components/addressComponent/addressComponent';
import { CompanyComponent} from './components/companyComponent/companyComponent';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddressComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
