import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template:`
  <form #form="ngForm" (ngSubmit)="onSubmit(form.value)">
    <input type="text" name="name" placeholder="Name" ngModel/><br>
    <input type="text" name="surname" placeholder="Surname" ngModel/><br>
    <input type="text" name="email" placeholder="Email" ngModel/><br>
    <input type="tel" name="tel" placeholder="Tel" ngModel/><br>
    <div ngModelGroup="address">
      <input type="text" name="country" placeholder="Country" ngModel/><br>
      <input type="text" name="city" placeholder="City" ngModel/><br>
      <input type="text" name="address" placeholder="Address" ngModel/><br>
    </div>
    <button type="submit">Send</button>
  <form>
  `
})
export class AppComponent {
  title = 'TemplateDrivenForms';
  //NgForm Directive Details
  @ViewChild("form", {static:true}) form:NgForm;
  onSubmit(data){
    //Forma ilk değerleri atama
    // this.form.setValue({
    //   name:"Test",
    //   surname:"Test",
    // })
    //Formun belli nesnesine değer atama
    //this.form.controls["email"].setValue("Test@gmail.com");
    //Formun bir kısmına değer atama
    // this.form.control.patchValue({
    //   tel:"05555555"
    // })
    //Form değerini sıfırlama
    // this.form.reset();
    // this.form.resetForm();
    // this.form.onReset();

    console.log(`Value: ${this.form.value}`);
    console.log(`Valid: ${this.form.valid}`);
    console.log(`Touched: ${this.form.touched}`);
    console.log(`Submitted: ${this.form.submitted}`);
    console.log(data);

    console.log(this.form);
    console.log(this.form.controls);
  }
}
