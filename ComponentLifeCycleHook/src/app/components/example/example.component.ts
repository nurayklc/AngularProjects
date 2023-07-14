import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-example',
  template:`Example Component <br/>
  <input type="text" [(ngModel)]="data"><br/> 
  <ng-content></ng-content>`,
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy{
  
  @Input() data:string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("1. ngOnChanges tamamlandi.");
  }
  ngOnInit(): void {
    console.log("2.  ngOnInit tamamlandi.");
  }
  ngDoCheck(): void {
    console.log("3.  ngDoCheck tamamlandi.");
  }

  ngAfterContentInit(): void {
    console.log("4.  ngAfterContentInit tamamlandi.");
  }
  ngAfterContentChecked(): void {
    console.log("5.  ngAfterContentChecked tamamlandi.");
  }
  ngAfterViewInit(): void {
    console.log("6.  ngAfterViewInit tamamlandi.");
  }
  ngAfterViewChecked(): void {
    console.log("7.  ngAfterViewChecked tamamlandi.");
  }
  ngOnDestroy(): void {
    console.log("8.  ngOnDestroy tamamlandi.");
  }
}
