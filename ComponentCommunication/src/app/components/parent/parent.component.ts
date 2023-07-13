import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<p>parent works!</p>
    <!-- <app-child childData="ddd"></app-child>  -->
    <app-child
      [childData]="data"
      (dataEvent)="childEvent($event)"
    ></app-child> `,
})
export class ParentComponent {
  data: string = 'test';
  childEvent(obj: any) {
    debugger;
  }
}
