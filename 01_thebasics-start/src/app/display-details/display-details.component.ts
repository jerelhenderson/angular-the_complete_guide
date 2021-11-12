import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  datesArray = [];
  show = false;
  blueStatus = 'off';

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggle() {
    this.show = (this.show === false) ? true : false;
    this.datesArray.push(new Date());
  }
}
