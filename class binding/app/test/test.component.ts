import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <h2 class="text-success">Hello World</h2>
    <h2 [class]="successClass">Hello World</h2>
    <h2 class="text-special" [class]="successClass" >Hello World</h2>
    <h2 [class.text-danger]='hasError'>Hello World</h2>
    <h2 [ngClass]="messagesClasses">Hello World</h2>
  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }`
  ]
})
export class TestComponent implements OnInit {
  public name = "Mykolaj";
  public successClass = 'text-success';
  public hasError = true;
  public isSpecial = true;
  public messagesClasses = {
      'text-success': !this.hasError,
      'text-danger': this.hasError,
      'text-special': this.isSpecial
};

  constructor() { }

  ngOnInit() {
  }

}
