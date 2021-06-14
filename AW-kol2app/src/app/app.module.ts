import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AWDataService} from "./service/aw-data.service";
import { OrdersAWComponent } from './components/orders-aw/orders-aw.component';
import { OrdersItemAWComponent } from './components/orders-item-aw/orders-item-aw.component';
import { OrdersDetailsAWComponent } from './components/orders-details-aw/orders-details-aw.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersAWComponent,
    OrdersItemAWComponent,
    OrdersDetailsAWComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AWDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
