import { Passenger } from "./passenger";

export class BookingDt {
    noOfPassenger:Number;
    cost:number;
    userId:number;
    flightId:number;
    emailId:String;
    travelClass:String;
    passengerList:Passenger[];
}
