import { Router } from '@angular/router';
import { AdminService } from './../../Services/admin.service';
import { FlightDt } from '../../Model/flight-dt';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  flightDT: FlightDt = new FlightDt();

  constructor(private adminService: AdminService, private router : Router) { }

  ngOnInit() {
  }

  addFlight(){
    this.flightDT.noOfSeats=this.flightDT.economySeats+this.flightDT.businessSeats;
    this.flightDT.adminId=Number(sessionStorage.getItem('adminId'));
    //console.log(this.flightDT);
    this.adminService.fetchFlights(this.flightDT).subscribe(response => {
      //alert(JSON.stringify(response));
      this.router.navigate(['flightAdded']);
    })
    
  }

}
