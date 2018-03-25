import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-department-list',
  template: `
    <h3 class="title">Department List
    </h3>
    <ul class="item">
      <li (click)="onSelect(department)" *ngFor="let department of departments" [class.selected]="iSelected(department)">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  public selectedId;
  public departments =[
    {'id':1, 'name':'Angular'},
    {'id':2, 'name':'NodeJs'},
    {'id':3, 'name':'HTML'},
    {'id':4, 'name':'Css'},
    {'id':5, 'name':'Ruby'},
    {'id':6, 'name':'PHP'},
    {'id':7, 'name':'Apache'}
  ];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedId = parseInt(this.route.snapshot.paramMap.get('id'));
  }
  onSelect(department){
    this.router.navigate(['/departments', department.id]);
  }
  iSelected(department){
    return department.id === this.selectedId;
  }
}
