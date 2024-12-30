import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  constructor(private obj:ElementRef) { 
    this.obj.nativeElement.style.backgroundColor='yellow'
    this.obj.nativeElement.style.fontWeight='bold'
  }
}
