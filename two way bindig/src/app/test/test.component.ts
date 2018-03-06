import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome 
    </h2>
    <input [(ngModel)]="name" type="text">
    {{name}}
  `,
  styles: [`
    
  `]
})
export class TestComponent implements OnInit {
  public name = "";
  constructor() { }
  ngOnInit() {
  }
}
