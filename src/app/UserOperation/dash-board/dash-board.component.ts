import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  name : String;
  constructor() { }

  ngOnInit() {
    this.name = sessionStorage.getItem('userName');
  }

}
