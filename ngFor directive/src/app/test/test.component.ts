import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div *ngFor="let color of colors; index as i">
    <h2>{{i+1}} {{color}}</h2>
  </div>
    
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public colors = ["red", "blue", "green", "orange", "submarine"];
  constructor() { }

  ngOnInit() {
  }

}
