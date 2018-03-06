import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <input #myInput type="text">
    <button (click)="logMessege(myInput.value)">Log</button>
  `,
  styles: [`
    
  `]
})
export class TestComponent implements OnInit {
  public name = "Mykolaj";
  logMessege(value){
    console.log(value)
  }
  constructor() { }
  ngOnInit() {
  }
}
