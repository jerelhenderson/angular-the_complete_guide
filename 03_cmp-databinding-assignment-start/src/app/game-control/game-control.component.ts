import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() passNum = new EventEmitter<number>();

  interval;
  num = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onGameStart() {
    this.interval = setInterval(() => {
      this.passNum.emit(this.num++);
    }, 1000);
  }

  onGameEnd() {
    clearInterval(this.interval);
  }

}
