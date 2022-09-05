import { Passenger } from "./passenger";

export class FetchTicket {
    bookingId:number;
    flightId:number;
    source:String;
    destination:String;
    departureTime:String;
    arrivalTime:String;
    journeyDate:Date;
    travelClass:String;
    passengerList:Passenger[];
}
