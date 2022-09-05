import { FlightAddedComponent } from './AdminOperation/flight-added/flight-added.component';
import { AdminDashboardComponent } from './AdminOperation/admin-dashboard/admin-dashboard.component';
import { DashBoardComponent } from './UserOperation/dash-board/dash-board.component';
import { AboutUsComponent } from './Home/about-us/about-us.component';
import { DisplayTicketComponent } from './UserOperation/display-ticket/display-ticket.component';
import { DisplayBookingComponent } from './UserOperation/display-booking/display-booking.component';
import { PaymentWindowComponent } from './UserOperation/payment-window/payment-window.component';
import { BookFlightComponent } from './UserOperation/book-flight/book-flight.component';
import { UserRegistrationComponent } from './UserOperation/user-registration/user-registration.component';
import { DisplayAllFlightComponent } from './AdminOperation/display-all-flight/display-all-flight.component';
import { AddFlightComponent } from './AdminOperation/add-flight/add-flight.component';
import { AdminLoginComponent } from './Login/admin-login/admin-login.component';
import { HomeComponent } from './Home/home/home.component';
import { FlightSearchComponent } from './UserOperation/flight-search/flight-search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './Login/user-login/user-login.component';
import { DisplayCancellationComponent } from './UserOperation/display-cancellation/display-cancellation.component';
import { PaymentSuccessfulComponent } from './UserOperation/payment-successful/payment-successful.component';


const routes: Routes = [
  {path: '',component: HomeComponent, pathMatch:'full'},
  { path: 'flightSearch', component: FlightSearchComponent },
  { path: 'userLogin', component: UserLoginComponent },
  { path: 'home', component: HomeComponent },
  {path: 'adminLogin', component: AdminLoginComponent},
  {path:'addFlight',component: AddFlightComponent},
  {path:'displayAllFlight', component: DisplayAllFlightComponent},
  {path: 'userRegistration', component: UserRegistrationComponent},
  {path:'bookFlight', component: BookFlightComponent},
  {path: 'paymentWindow', component: PaymentWindowComponent},
  {path: 'displayBookings',component:DisplayBookingComponent},
  {path:'displayTicket', component: DisplayTicketComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'dashBoard', component: DashBoardComponent},
  {path: 'adminDashboard', component: AdminDashboardComponent},
  {path:'cancellation',component:DisplayCancellationComponent},
  {path: 'paymentSuccess', component: PaymentSuccessfulComponent},
  {path: 'flightAdded', component: FlightAddedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
