import {AbstractControl, ValidatorFn} from '@angular/forms';

export class PhoneNumberValidationFactory {
  static localPhoneNumber(): ValidatorFn {
    return (c: AbstractControl) => {
      const isValid = /^\+27/.test(c.value);

      return isValid ? null : { localPhoneNumber: true };
    };
  }
}
