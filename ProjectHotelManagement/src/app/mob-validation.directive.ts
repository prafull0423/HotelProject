import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMobValidation]'
})
export class MobValidationDirective {

  constructor(private ele: ElementRef) { }
  @HostListener('input', ['$event'])

  onchange() {
    var inputValue = this.ele.nativeElement.value;
    console.log('inputNo', inputValue);

    this.ele.nativeElement.value = inputValue?.replace(/[^0-9]/g, '')
  }
}
