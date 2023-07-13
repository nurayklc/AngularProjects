import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>child works!</p>
    {{ childData }}`,
})
export class ChildComponent implements OnInit{
  ngOnInit(): void {
    this.dataEvent.emit({message:'Merhaba'})
  }
  @Input() childData: any;
  @Output() dataEvent: EventEmitter<any> = new EventEmitter();
}
