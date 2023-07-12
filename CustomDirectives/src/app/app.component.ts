import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div appExample color="green">
    merhaba
  </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CustomDirectives';
}
