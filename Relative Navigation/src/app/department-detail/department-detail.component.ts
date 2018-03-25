import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3 class="title">You selected department with id= {{departmentID}}</h3>
    <a (click)="goPrev()">Previous</a>
    <a  (click)="goNext()">Next</a>
    <a (click)="goToDepartments()">Back</a>
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
  goToDepartments(){
    let selectedId = this.departmentID ? this.departmentID: null;
    //this.router.navigate(['/departments', {id:selectedId, test: 'testVALUE'}])
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route})
  }
}
