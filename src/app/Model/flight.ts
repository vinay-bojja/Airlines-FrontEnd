import { Time } from "@angular/common";
import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";
import { Timestamp } from "rxjs";

export class Flight {
    flightId:number;
    source:String;
    destination:String;
    departure: Time;
    arrival:Time;
    duration:String;
    journeyDate: Date;
    economyClassCost: number;
    businessClassCost: number;
    noOfSeats:number;
    economySeats:number;
    businessSeats:number;
}
