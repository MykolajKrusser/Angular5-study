import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3 class="title">You selected department with id= {{departmentID}}</h3>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentID;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.departmentID = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
