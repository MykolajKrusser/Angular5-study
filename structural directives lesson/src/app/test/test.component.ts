import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <!--
    <h2 *ngIf="displayName; else elseBlock">Hello Mykolaj</h2>
    <ng-template #elseBlock>
      <h2>Name is hidden</h2>
    </ng-template>
    -->
    
    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>
      <h2>Hello webstorm</h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>hidden</h2>
    </ng-template>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public displayName = false;
  constructor() { }

  ngOnInit() {
  }

}
