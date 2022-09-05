import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightDt } from '../Model/flight-dt';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  fetchFlights(flightDT: FlightDt): Observable<any>{
    let url = "http://localhost:8085/addFlight";
    return this.httpClient.post(url, flightDT);
  }
  displayAllFlights():Observable<any>{
    let url = "http://localhost:8085/displayAllFlights";
    return this.httpClient.get(url);
  }
  deleteFlight(flightId: number):Observable<any>{
    let url = "http://localhost:8085/deleteFlight?id="+flightId;
    console.log(url);
    return this.httpClient.delete(url);
  }
}
