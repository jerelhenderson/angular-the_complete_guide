import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedHeaderLink = new EventEmitter<string>();

  onSelect(headerLink: string) {
    this.selectedHeaderLink.emit(headerLink);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
