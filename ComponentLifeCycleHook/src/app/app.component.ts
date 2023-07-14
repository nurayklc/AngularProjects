import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<app-example data="hello">burasi content alani</app-example>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ComponentLifeCycleHook';
}
