import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CountersComponent } from './counters/counters.component';
import { MainComponent } from './main/main.component';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [
    AppComponent,
    CountersComponent,
    MainComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'counter-management-view', component:CountersComponent},
      {path: 'customer-view', component:CustomerComponent},
      { path: '',   redirectTo: '/counter-management-view', pathMatch: 'full' }, // redirect to
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
