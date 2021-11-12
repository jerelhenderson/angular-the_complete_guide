import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // Bind the class 'open' to directive
  @HostBinding('class.open') isOpen = false;

  constructor(private refToElement: ElementRef) { }

  @HostListener('document:click', ['$event']) toggleOpen(eventData: Event) {
    this.isOpen = this.refToElement.nativeElement.contains(eventData.target) ? !this.isOpen : false;
  }
}
