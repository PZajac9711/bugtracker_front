import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appRepeatPassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: RepeatPasswordDirective, multi: true}]
})
export class RepeatPasswordDirective implements Validator {
  @Input() appRepeatPassword: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlToCompare = this.appRepeatPassword;
    if (controlToCompare && controlToCompare !== control.value) {
      return {'notEqual': true};
    }
    return null;
  }

  constructor() {
  }

}
