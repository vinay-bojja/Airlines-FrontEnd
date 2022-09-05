import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { BookingDt } from './../../Model/booking-dt';
import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/Model/passenger';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  bookingDT = new BookingDt(); 
  passengerList = new Array();
  noOfPassengers:number;
  dictionary:any;
  firstName:String;
  lastName:String;
  gender:string;
  age:number;
  disable:boolean = false;
  count:number = 0;
  ecoCost:number;
  busCost:number;
  message:String;
  
  constructor(private userService: UserService, private router:Router) {
    
   }

  ngOnInit() {
    this.noOfPassengers = Number(sessionStorage.getItem('noOfPassengers'));
    this.ecoCost = Number(sessionStorage.getItem('ecoCost'));
    this.busCost = Number(sessionStorage.getItem('busCost'));
  }
  numSequence(i:number):any[]{
    return Array(i);
  }
  addPassenger(){
    this.disable = false;
    var dict = {
      "fName": this.firstName,
      "lName":this.lastName,
      "gender":this.gender,
      "age":this.age
    }
    //console.log(dict);
    this.passengerList.push(dict);
    this.message = "Passenger Added Successfully";
    //console.log(this.passengerList);
    this.count++;
    if(this.count == this.noOfPassengers){
      this.disable = true;
      this.message = "Passengers Added Proceed to Payment";
    }
  }
  addBooking(){
    this.bookingDT.userId = Number(sessionStorage.getItem('userId'));
    this.bookingDT.flightId = Number(sessionStorage.getItem('flightId'));
    this.bookingDT.noOfPassenger = this.noOfPassengers;
    this.bookingDT.travelClass = String(sessionStorage.getItem('travelClass'));
    if(this.bookingDT.travelClass == "Economy")
    {
      this.bookingDT.cost = this.noOfPassengers * this.ecoCost;
    }
    else{
      this.bookingDT.cost = this.noOfPassengers * this.busCost;
    }
    sessionStorage.setItem('cost',String(this.bookingDT.cost));
    this.bookingDT.passengerList = this.passengerList;
    //console.log(this.bookingDT)
    this.userService.addBooking(this.bookingDT).subscribe(response => {
      //console.log(JSON.stringify(response));
       if(response.message == "Ticket Booking in Progress"){
         sessionStorage.setItem('bookingId',String(response.generatedId));
       }
      this.router.navigate(['paymentWindow']);
    })
  }

}
