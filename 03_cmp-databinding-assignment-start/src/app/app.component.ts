import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// primary app component receives number from 'game-control.component'
// store received number in an array
export class AppComponent {
  outputNum: number[] = [];

  passedNum(receivedNum: number) {
    this.outputNum.push(receivedNum);
  }
}
