import { AdminService } from './../../Services/admin.service';
import { SearchFlightDT } from 'src/app/Model/search-flight-dt';
import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/Model/flight';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-all-flight',
  templateUrl: './display-all-flight.component.html',
  styleUrls: ['./display-all-flight.component.css']
})
export class DisplayAllFlightComponent implements OnInit {

  flight: Flight[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.displayAllFlights();
  }
  displayAllFlights(){
    this.adminService.displayAllFlights().subscribe(response => {
     // console.log(JSON.stringify(response));
      this.flight = response;
      //console.log(this.flight);
    })
  }
  delete(flightId: number){
    //console.log(flightId);
    this.adminService.deleteFlight(flightId).subscribe(response => {
      
      this.adminService.displayAllFlights().subscribe(response1 => {
        //console.log(JSON.stringify(response1));
        this.flight = response1;
        //console.log(this.flight);
      });
    
    });
    
  }

}
