import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
   <div [ngSwitch]="color">
     <h1 *ngSwitchCase="'red'">RED color</h1>
     <h1 *ngSwitchCase="'blue'">BLUE color</h1>
     <h1 *ngSwitchCase="'green'">Green color</h1>
     <h1 *ngSwitchDefault>Pick color</h1>
   </div>
    
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public color = 'boom';
  constructor() { }

  ngOnInit() {
  }

}
