import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-department-list',
  template: `
    <h3 class="title">Department List
    </h3>
    <ul class="item">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  public departments =[
    {'id':1, 'name':'Angular'},
    {'id':2, 'name':'NodeJs'},
    {'id':3, 'name':'HTML'},
    {'id':4, 'name':'Css'},
    {'id':5, 'name':'Ruby'},
    {'id':6, 'name':'PHP'},
    {'id':7, 'name':'Apache'}
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSelect(department){
    this.router.navigate(['/departments', department.id]);
  }
}
