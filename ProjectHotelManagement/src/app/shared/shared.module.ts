import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../search.pipe';
import { MobValidationDirective } from '../mob-validation.directive';
import { NameValidationDirective } from '../name-validation.directive';



@NgModule({
  declarations: [
    SearchPipe,
    MobValidationDirective,
    NameValidationDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchPipe,
    MobValidationDirective,
    NameValidationDirective
  ]
})
export class SharedModule { }
