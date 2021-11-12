import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})

export class UnlessDirective {
  /* Receive condition as input, binded to the property 'unless' that uses set method to bind any
  changes to the input parameter */
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.referenceToViewContainer.createEmbeddedView(this.referenceToTemplate);
    } else {
      this.referenceToViewContainer.clear();
    }
  }

  // Template is what to render, ViewContainer is where to render it
  constructor(private referenceToTemplate: TemplateRef<any>, private referenceToViewContainer: ViewContainerRef) { }

}
