import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {InputDecorator} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-test',
  template: `
 <h2>{{'hello ' + age}}</h2>
    <button (click)="fireEvent()" >send event</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  @Input('parentData') public age;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  fireEvent(){
    this.childEvent.emit("Hello World events!!!!");
  }
}
