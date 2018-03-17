import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {InputDecorator} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-test',
  template: `
 <h2>{{name}}</h2>
 <h2>{{name | lowercase}}</h2>
 <h2>{{name | uppercase}}</h2>
 <h2>{{message | titlecase}}</h2>
 <h2>{{name | slice:2:4}}</h2>
    <h2>{{person | json}}</h2>
 <hr>
 <h2>{{5.678 | number:"1.2-3"}}</h2>
 <h2>{{5.678 | number:"3.4-5"}}</h2>
 <h2>{{5.678 | number:"3.1-2"}}</h2>
    <hr>
    <h2>{{0.25 | percent}}</h2>
    <hr>
 <h2>{{0.25 | currency}}</h2>
    <hr>
    <h2>{{100 | currency:"JPY"}}</h2>
 <hr>
    <h2>{{date}}</h2>
    <h2>{{date | date:'short'}}</h2>
    <h2>{{date | date:'shortDate'}}</h2>
    <h2>{{date | date:'shortTime'}}</h2>
    <h2>{{date | date:'medium'}}</h2>
    <h2>{{date | date:'long'}}</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = "Krusser Mykolaj";
  public message = "hello to code";
  public person = {
    "firstName":"Johny",
    "lastName":"Doe"
  };
  public date = new Date();
  constructor() { }

  ngOnInit() { }

}
