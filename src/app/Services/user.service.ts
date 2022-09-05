import { BookingDt } from './../Model/booking-dt';
import { SearchFlightDT } from './../Model/search-flight-dt';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../Model/flight';
import { Observable } from 'rxjs';
import { User } from '../Model/User/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  fetchFlights(flightSearchDT: SearchFlightDT): Observable<any>{
    let url = "http://localhost:8085/searchFlights";
    return this.httpClient.post(url, flightSearchDT);
  }
  registerUser(user:User):Observable<any>{
    let url = "http://localhost:8085/registerUser";
    return this.httpClient.post(url, user);
  }
  addBooking(bookingDT:BookingDt):Observable<any>{
    let url = "http://localhost:8085/addBooking";
    return this.httpClient.post(url, bookingDT);
  }
  updateBooking(bookingId: number):Observable<any>{
    let url = "http://localhost:8085/updateBooking?bookingId="+bookingId;
    return this.httpClient.get(url);
  }
  displayBookings(userId:Number):Observable<any>{
    let url = "http://localhost:8085/fetchBooking?userId="+userId;
    return this.httpClient.get(url);
  }
  cancelBooking(bookingId:number):Observable<any>{
    let url = "http://localhost:8085/cancelTicket?bookingId="+bookingId;
    return this.httpClient.get(url);
  }
  generateTicket(bookingId:Number):Observable<any>{
    let url = "http://localhost:8085/fetchTicket?bookingId="+bookingId;
    return this.httpClient.get(url);
  }
}
