import {AbstractControl, ValidatorFn} from '@angular/forms';

export function validator1 (control: AbstractControl)
{
    if (control && (control.value !== null && control.value !== undefined))
    {
        const value: string = control.value;
        const regexNumber = /\d/;
        const regexBigLetter = new RegExp('[A-Z]');

        console.log(regexNumber, regexBigLetter);
        if (!regexNumber.test(value) || !regexBigLetter.test(value))
        {return{
            isError: true
        }
        }
    }
    return null;
}