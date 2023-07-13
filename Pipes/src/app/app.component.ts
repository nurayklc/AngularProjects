import { Component } from '@angular/core';
import { CustomPipe } from './pipes/custom.pipe';

@Component({
  selector: 'app-root',
  template: `
  <div>{{ title | uppercase}}</div>
  <div>{{ title | lowercase}}</div>
  <div>{{ 1000 | currency }}</div>
  <div>{{ '02.05.2023' | date }}</div>
  <div>{{ '02.05.2023' | date :'fullDate' }}</div>
  <div>{{ '02.05.2023' | date :'medium' }}</div>
  <div>{{ '02.05.2023' | date :'shortTime' }}</div>
  <div>{{ '02.05.2023' | date :'mm:ss' }}</div>
  <div>{{ ['a', 'b', 'c', 'd'] | slice : 2 : 4 }}</div>
  <div>{{ {name: "Test", surname:'testt'} | json }}</div>
  <div>{{ 50 | percent }}</div>
  <div>{{ 'ali veli deli' | titlecase }}</div>
  <ul>
    <li *ngFor="let name of names | keyvalue" >{{name.key}}, {{name.value}} </li>
  </ul>
  {{"test test test" | custom : 1 : 5}}
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private custom:CustomPipe){
    console.log(custom.transform("testtetette ettetee ", 3,6));
  }
  title = 'Pipes';
  names: Map<number, string> = new Map([[1, 'test'], [2, 'deli'], [3, 'ahmet']]);
}
