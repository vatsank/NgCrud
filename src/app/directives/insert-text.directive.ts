import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appInsertText]'
})
export class InsertTextDirective {


  constructor(private element: ElementRef,
                 private renderer: Renderer) { }

    @Input() set addText(message) {

     this.element.nativeElement.innerHTML = message;
   this.renderer.setElementStyle(
           this.element.nativeElement, 'color', 'red');

        }

}
