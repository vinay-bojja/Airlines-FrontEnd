import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './Login/admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './Login/user-login/user-login.component';
import { FlightSearchComponent } from './UserOperation/flight-search/flight-search.component';
import { UserNavComponent } from './NavBar/user-nav/user-nav.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { HomeNavComponent } from './NavBar/home-nav/home-nav.component';
import { AddFlightComponent } from './AdminOperation/add-flight/add-flight.component';
import { DisplayAllFlightComponent } from './AdminOperation/display-all-flight/display-all-flight.component';
import { AdminNavComponent } from './NavBar/admin-nav/admin-nav.component';
import { BookFlightComponent } from './UserOperation/book-flight/book-flight.component';
import { UserRegistrationComponent } from './UserOperation/user-registration/user-registration.component';
import { PaymentWindowComponent } from './UserOperation/payment-window/payment-window.component';
import { DisplayBookingComponent } from './UserOperation/display-booking/display-booking.component';
import { DisplayTicketComponent } from './UserOperation/display-ticket/display-ticket.component';
import { DisplayCancellationComponent } from './UserOperation/display-cancellation/display-cancellation.component';
import { AboutUsComponent } from './Home/about-us/about-us.component';
import { DashBoardComponent } from './UserOperation/dash-board/dash-board.component';
import { AdminDashboardComponent } from './AdminOperation/admin-dashboard/admin-dashboard.component';
import { PaymentSuccessfulComponent } from './UserOperation/payment-successful/payment-successful.component';
import { FlightAddedComponent } from './AdminOperation/flight-added/flight-added.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    FlightSearchComponent,
    UserNavComponent,
    HomeComponent,
    HomeNavComponent,
    AddFlightComponent,
    DisplayAllFlightComponent,
    AdminNavComponent,
    BookFlightComponent,
    UserRegistrationComponent,
    PaymentWindowComponent,
    DisplayBookingComponent,
    DisplayTicketComponent,
    DisplayCancellationComponent,
    AboutUsComponent,
    DashBoardComponent,
    AdminDashboardComponent,
    PaymentSuccessfulComponent,
    FlightAddedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
