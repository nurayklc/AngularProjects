import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h5>Two-Way Data Binding</h5>
  <input [(ngModel)]="inputText">

  <p>{{ inputText }}</p>

  <p [style.border]="border">Attribute Bindig </p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  border:string = "1px solid green";
  inputText: string = "Hello Angular!";
}
