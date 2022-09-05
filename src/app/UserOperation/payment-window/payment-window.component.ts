import { UserService } from 'src/app/Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-window',
  templateUrl: './payment-window.component.html',
  styleUrls: ['./payment-window.component.css']
})
export class PaymentWindowComponent implements OnInit {

  cost:String;
  bookingId:number;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.cost = sessionStorage.getItem('cost');
    this.bookingId = Number(sessionStorage.getItem('bookingId'));
  }
  updateBooking() {
    this.userService.updateBooking(this.bookingId).subscribe(response => {
    console.log(JSON.stringify(response));
    })
  }

}
