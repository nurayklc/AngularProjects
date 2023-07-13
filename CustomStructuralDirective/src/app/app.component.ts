import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div *appCustomif="false">
  merhaba
  </div>
  <!-- <div *appCustomfor="5; let i">
  app custom for {{i}}
  </div> -->
  <div *appCustomfor="names; let name">
  app custom for {{name}}
  </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CustomStructuralDirective';
  names: string[] = ["Ahmet", "Mehmet", "Test"];
}
