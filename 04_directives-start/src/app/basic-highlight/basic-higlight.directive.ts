import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})

// Attribute Directive
export class BasicHighlightDirective implements OnInit {
    // Not preferred method for accessing the DOM
    constructor(private referenceToElement: ElementRef) {
    }

    ngOnInit() {
        this.referenceToElement.nativeElement.style.backgroundColor = 'green';
    }
}