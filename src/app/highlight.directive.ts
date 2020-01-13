import { Directive, Input, ElementRef } from "@angular/core";
import { Quotes } from "./quotes";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  @Input() quote: Quotes;

  constructor(el: ElementRef) {
    el.nativeElement.style.color = "Green";
  }
}
