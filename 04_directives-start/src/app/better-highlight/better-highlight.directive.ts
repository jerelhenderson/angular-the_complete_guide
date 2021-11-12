import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

// Attribute Directive
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  // CamelCase needed to access DOM properties (which doesn't recognize dashes)
  @HostBinding('style.backgroundColor') backgroundColor: string;

  // Preferred method for accessing the DOM
  constructor(private referenceToElement: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.referenceToElement.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    /* Using the Renderer is a more difficult way of changing DOM elements
    this.renderer.setStyle(this.referenceToElement.nativeElement, 'background-color', 'blue'); */
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /* Using the Renderer is a more difficult way of changing DOM elements
    this.renderer.setStyle(this.referenceToElement.nativeElement, 'background-color', 'transparent'); */
    this.backgroundColor = this.defaultColor;
  }
}
