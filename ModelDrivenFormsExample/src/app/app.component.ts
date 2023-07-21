import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  template:`
  <form [formGroup]="frm" (ngSubmit)="onSubmit()">
    <input type="text" placeholder="Name" formControlName="name"><br/>
    <input type="text" placeholder="Surname" formControlName="surname"><br/>
    <input type="text" placeholder="Email" formControlName="email"><br/>
    <input type="text" placeholder="Tel" ><br/>
    <div formGroupName="address">
      <input type="text" name="country" placeholder="Country"  formControlName="country"/><br>
      <input type="text" name="city" placeholder="City" formControlName="city"/><br>
      <input type="text" name="address" placeholder="Address"  formControlName="address"/><br>
    </div>
    <button>Send</button>
  </form><br>
  <button (click)="ok()">Ok</button><br>
  Valid: {{frm.valid}}<br><br>
  
  <button (click)="markAsTouched()">markAsTouched</button><br>

  <button (click)="markAllAsTouched()">markAllAsTouched</button><br>
  <button (click)="markAsUntouched()">markAsUntouched</button><br>
  <button (click)="markAsDirty()">markAsDirty</button><br>
  <button (click)="markAsPristine()">markAsPristine</button><br>
  <button (click)="disable()">disable</button><br>
  <button (click)="enable()">enable</button><br>
  form touched: {{frm.touched}}<br>
  'name' form control touched : {{frm.get("name").touched}}<br>
  'address' form control touched : {{frm.get("address").touched}}<br>
  'country' form control touched : {{frm.get("country").touched}}<br>
  `
})
export class AppComponent {
  frm: FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.frm = formBuilder.group({
      name:["", Validators.required],
      surname:["deafult deger verilir"],
      email:[""],
      tel:[""],
      address: formBuilder.group({
        city:[""],
        country:[""],
        address:[""]
      })
    })
    
    this.frm.valueChanges.subscribe({
      next: data => {
        console.log("değişiklik yakalandi");
      }
    })

    this.frm.statusChanges.subscribe({
      next: data => {
        console.log("formun geçerliliği");
      }
    })
  }

  ok(){
    this.frm.controls["name"].setValue("Test", { onlySelf:true });
    // iki farkli şekilde yapılır
    this.frm.get("name").setValue("Test", { onlySelf:true });
  }

  onSubmit(){
    console.log(this.frm.value);
  }

  markAsTouched(){
    //this.frm.markAsTouched();
    this.frm.get("name").markAsTouched({ onlySelf: true})
  }

  markAllAsTouched(){
    //this.frm.markAllAsTouched();
    this.frm.get("name").markAllAsTouched();
  }

  markAsUntouched(){
    //this.frm.markAsUntouched();
    this.frm.get("name").markAsUntouched();
  }

  markAsDirty(){
    //this.frm.markAsDirty();
    this.frm.get("name").markAsDirty();
  }

  markAsPristine(){
    //this.frm.markAsPristine();
    this.frm.get("name").markAsPristine();
  }

  disable(){
    this.frm.disable();
  }

  enable(){
    this.frm.enable();
  }
}
