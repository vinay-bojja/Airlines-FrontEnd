import { Router } from '@angular/router';
import { BookFlightComponent } from './../book-flight/book-flight.component';
import { SearchFlightDT } from './../../Model/search-flight-dt';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Flight } from 'src/app/Model/flight';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  flightSearchDT = new SearchFlightDT();
  flight : Flight[]= [];
  
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }
  searchFlights(){
    sessionStorage.setItem('noOfPassengers', String(this.flightSearchDT.noOfPassengers));
    sessionStorage.setItem('travelClass',String(this.flightSearchDT.travelClass));
    sessionStorage.setItem('travelDate',String(this.flightSearchDT.travelDate));
    this.userService.fetchFlights(this.flightSearchDT).subscribe(response => {
      //console.log(JSON.stringify(response));
      this.flight =response;
      // console.log(this.flight);
      // alert(JSON.stringify(response));
    })
  }
  flightStore(id:number, ecoCost:number, busCost:number){
    sessionStorage.setItem('flightId',String(id));
    sessionStorage.setItem('ecoCost', String(ecoCost));
    sessionStorage.setItem('busCost', String(busCost));
    this.router.navigate(['bookFlight'])
  }

}
