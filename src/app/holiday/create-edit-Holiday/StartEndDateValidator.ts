import {AbstractControl, ValidatorFn} from '@angular/forms';

export function StartEndValidator (control: AbstractControl)
{

    if (!control.get('startDate').value || !control.get('endDate').value)
        { return null; }

    const startDate: Date = control.get('startDate').value;
    const endDate: Date = control.get('endDate').value;

    if (startDate > endDate)
    {
        return {
            isError: true
        }
    }


    return null;
}