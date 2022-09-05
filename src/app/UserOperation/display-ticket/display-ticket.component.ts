import { UserService } from 'src/app/Services/user.service';
import { FetchTicket } from './../../Model/fetch-ticket';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-ticket',
  templateUrl: './display-ticket.component.html',
  styleUrls: ['./display-ticket.component.css']
})
export class DisplayTicketComponent implements OnInit {

  fetchTicket = new FetchTicket();
  ticketId:Number;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.ticketId = Number(sessionStorage.getItem('ticketId'));
    this.generateTicket();
  }

  generateTicket(){
    this.userService.generateTicket(this.ticketId).subscribe(response => {
      console.log(JSON.stringify(response));
      this.fetchTicket = response;
      console.log(JSON.stringify(this.fetchTicket));
    })
  }

}
