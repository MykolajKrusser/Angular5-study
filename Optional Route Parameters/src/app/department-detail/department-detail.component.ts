import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3 class="title">You selected department with id= {{departmentID}}</h3>
    <a (click)="goPrev()">Previous</a>
    <a  (click)="goNext()">Next</a>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentID;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.departmentID = parseInt(this.route.snapshot.paramMap.get('id'));
  }
  goPrev(){
    let prevId = this.departmentID = this.departmentID-1;
    this.router.navigate(['/departments', prevId]);
  }
  goNext(){
    let nextId = this.departmentID = this.departmentID+1;
    this.router.navigate(['/departments', nextId]);
  }
}
