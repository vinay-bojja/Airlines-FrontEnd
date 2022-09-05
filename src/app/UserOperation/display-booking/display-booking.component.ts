import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { FetchBooking } from './../../Model/fetch-booking';
import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/Model/passenger';

@Component({
  selector: 'app-display-booking',
  templateUrl: './display-booking.component.html',
  styleUrls: ['./display-booking.component.css']
})
export class DisplayBookingComponent implements OnInit {

  bookings: FetchBooking[];
  userId:Number;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userId = Number(sessionStorage.getItem('userId'));
    this.displayBookings();
  }
 passengerList :Passenger[];
 
  displayBookings(){
    this.userService.displayBookings(this.userId).subscribe(response => {
      console.log(JSON.stringify(response));
      this.bookings = response;
      console.log(JSON.stringify(this.bookings));
    })
  }

  cancelBooking(bookingId:number){
    this.userService.cancelBooking(bookingId).subscribe(response => {
      //alert(JSON.stringify(response));
      sessionStorage.setItem('refund',response);
      this.router.navigate(['cancellation'])
    })
  }
  goToTicket(bookingId: number){
    sessionStorage.setItem('ticketId',String(bookingId));
    this.router.navigate(['displayTicket']);
  }

}
