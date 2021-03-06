import { Validator, NG_VALIDATORS, ValidationErrors, AbstractControl } from "@angular/forms";
import { Directive } from "@angular/core";
import { } from '@angular/core';


@Directive({
    selector: '[appDateValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomValidatorDirective,
        multi: true
    }]
})
export class CustomValidatorDirective implements Validator {

    validate(control: AbstractControl): ValidationErrors | null {
        if (control && control.value === null || '') {
            return { 'dateofbirthrequired': true }
        }
        else{
            if(control && control.value=="Invalid Date"){
                return {'invaliddate':true}
            }
            else {
              if(control.value > new Date(2000, 10, 30) || control.value< new Date(1994, 10, 30))
              {
                  return  {'invaliddate':true}
              }
            }
        }
        return null;
    }

}