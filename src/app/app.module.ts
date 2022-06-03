import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { SignupComponent } from './signup/signup.component';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { GetairlineComponent } from './getairline/getairline.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { GetdiscountComponent } from './getdiscount/getdiscount.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { GetflightComponent } from './getflight/getflight.component';
import { GetticketComponent } from './getticket/getticket.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    LogoutComponent,
    AdminhomeComponent,
    UserhomeComponent,
    SignupComponent,
    AddAirlineComponent,
    GetairlineComponent,
    AddDiscountComponent,
    GetdiscountComponent,
    AddFlightComponent,
    GetflightComponent,
    GetticketComponent,
    BookTicketComponent,
    UpdateTicketComponent,
    UserNavbarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
