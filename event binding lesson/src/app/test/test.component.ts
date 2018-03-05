import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <button (click)="testeMyButton($event)">Greeting</button>
    {{greeting}}
    <br>
    <button (click)="greeting = 'WAAAAAT!!!!'">WAt??</button>
  `,
  styles: [`
    
  `]
})
export class TestComponent implements OnInit {
  public name = "Mykolaj";
  public greeting = "";
  testeMyButton(event){
    console.log(event);
    console.log("Hello " + this.name);
    this.greeting = "hello " + this.name + "!!!!!!!!" + event.type + "  " + event.target;
  }


  constructor() { }

  ngOnInit() {
  }

}
