import { Passenger } from "./passenger";

export class FetchBooking {
    bookingId:number;
    source:String;
    destination:String;
    departure:String;
    arrival:String;
    journeyDate:Date;
    noOfPassengers:number;
    cost:number;
    ticketMailingId:String;
    bookingDate:Date;
    tarvelClass:String;
    passengerList: Passenger[];
}
