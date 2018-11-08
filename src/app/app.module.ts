import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AddInfoComponent } from './add-info/add-info.component';
import { CustomerInfoComponent } from './add-info/customer-info/customer-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightInfoComponent } from './add-info/flight-info/flight-info.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TicketingComponent,
    ServersComponent,
    AddInfoComponent,
    CustomerInfoComponent,
    FlightInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
