import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable,  map, concatMap, of, timer } from "rxjs";

// Custom Validator
export function capitalLetterValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const ascii : String[] = [];
    for (let n = 65; n <= 90; n++){
        ascii.push(String.fromCharCode(n));
        if(ascii.indexOf(value[n]) == -1)
        {
            return { capitalLetter: true }
        }
    }
    return null;
}

// Paramater Custom Validator
export function capitalLetterValidator2(count :number): ValidatorFn | null {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        const ascii : String[] = [];
        for (let n = 65; n <= 90; n++){
            ascii.push(String.fromCharCode(n));
        }
        let state: boolean = true;
        for (let c = 0; c < count; c++) {
            if(ascii.indexOf(value[c]) == -1)
            {
                state =false;
                break;
            }
        }
        if(!state)
        { 
            return { capitalLetter2: true }
        }
        return null;
    }
}

// Async Validator
export function validateAsyncValidator() : AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        const source = of(true);
        return timer(5000)
        .pipe(
            concatMap(() => source),
            map(() => {
                console.log("X");
                if(false)
                    return null;
                else
                    return { text: "..." }
            })
        )
    }
}

// Karşılaştırma Validator
export function matchPassword() : ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        const password: string = control.get("password").value;
        const passwordConfirm: string = control.get("passwordConfirm").value;
        if(password != passwordConfirm){
            return { "noMatch" : true}
        }
        return null;
    }
}
// Parameter Karşılaştırma Validator
export function matchPassword2(firstPassword:string, secondPassword:string) : ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        const password: string = control.get(firstPassword).value;
        const passwordConfirm: string = control.get(secondPassword).value;
        if(password != passwordConfirm){
            return { "noMatch" : true}
        }
        return null;
    }
}
