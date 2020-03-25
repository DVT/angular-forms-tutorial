import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';
import {PhoneNumberValidationFactory} from '../validators/PhoneNumberValidationFactory';

@Directive({
  selector: '[appLocalPhoneNumber]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: LocalPhoneNumberDirective, multi: true }
  ]
})
export class LocalPhoneNumberDirective implements Validator {
  validatePhoneNumber: ValidatorFn;

  constructor() {
    this.validatePhoneNumber = PhoneNumberValidationFactory.localPhoneNumber();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validatePhoneNumber(control);
  }

}
