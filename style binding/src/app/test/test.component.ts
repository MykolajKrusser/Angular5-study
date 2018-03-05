import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <h2 [style.color]="hasError ? 'red' : 'blue'">Style binding</h2>
    <h2 [style.color]="highLightColor">Style binding 2</h2>
    <h2 [ngStyle]="titleColor">Style binding 2</h2>
  `,
  styles: [`
    
  `]
})
export class TestComponent implements OnInit {
  public name = "Mykolaj";
  public hasError = false;
  public isSpecial = true;
  public highLightColor = "orange";
  public titleColor={
    color: 'blue',
    fontStyle: "italic",
    fontSize: "30px"
};


  constructor() { }

  ngOnInit() {
  }

}
