import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-cancellation',
  templateUrl: './display-cancellation.component.html',
  styleUrls: ['./display-cancellation.component.css']
})
export class DisplayCancellationComponent implements OnInit {

  refund:String;
  constructor() { }

  ngOnInit() {
    this.refund = sessionStorage.getItem('refund');
  }

}
