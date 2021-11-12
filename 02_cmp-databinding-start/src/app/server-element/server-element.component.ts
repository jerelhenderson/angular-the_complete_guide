import { Component, OnInit, Input, ViewEncapsulation, ElementRef, ViewChild, ContentChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // default, other options are None or Native
})
export class ServerElementComponent implements OnInit, OnDestroy {
  @Input('srvElement') element: {
    type: string, name: string, content: string
  }
  @Input() name: string;

  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.header.nativeElement.textContent);
  }

  ngOnDestroy() {

  }
}
