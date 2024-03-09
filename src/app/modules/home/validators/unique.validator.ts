import { Observable, map } from 'rxjs'

import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms'

export interface UniqueService {
  checkIfExist: (value: string) => Observable<boolean>
}

export class UniqueValidator {
  static createValidator(uniqueService: UniqueService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return uniqueService.checkIfExist(control.value).pipe(map((result: boolean) => (result ? null : { alreadyExist: true })))
    }
  }
}
