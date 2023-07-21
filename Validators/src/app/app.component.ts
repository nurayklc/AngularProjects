import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { capitalLetterValidator, capitalLetterValidator2, matchPassword } from './validators/func';

@Component({
  selector: 'app-root',
  template:`
  
  <form [formGroup]="frm" (ngSubmit)="onSubmit()">
    <input type="text" placeholder="Name" formControlName="name"><br/>
    <div *ngIf="!name.valid && (name.dirty || name.touched)">
      {{name.errors | json}}
    </div>
    <input type="text" placeholder="Surname" formControlName="surname"><br/>
    <input type="text" placeholder="Email" formControlName="email"><br/>
    <input type="text" placeholder="Tel" ><br/>
 
    <button>Send</button>
  </form><br>
  <button>Ok</button><br>
  `
})
export class AppComponent {
  frm: FormGroup;
  constructor(private formBuilder:FormBuilder)
  {
    this.frm = formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3), capitalLetterValidator2(3)]],
      surname: ["", capitalLetterValidator],
      email: ["", capitalLetterValidator2(3)],
      tel: [""]
    }, {validators: [matchPassword()]})
  }
  title = 'Validators';
  onSubmit(){

  }
  get name(){
    return this.frm.get("name");
  }
}
