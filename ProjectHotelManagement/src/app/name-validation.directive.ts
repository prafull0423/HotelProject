import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNameValidation]'
})
export class NameValidationDirective {

  constructor(private elementRef: ElementRef) { }
  @HostListener('input', ['$event'])

  onChange() {
    console.log('inputValue');

    var inputValue = this.elementRef.nativeElement.value;
    console.log('inputValue', inputValue);

    this.elementRef.nativeElement.value = inputValue?.replace(/[^a-zA-Z]/g, '')



  }

}
