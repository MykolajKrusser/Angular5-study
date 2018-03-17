import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-delail',
  templateUrl: './employee-delail.component.html',
  styleUrls: ['./employee-delail.component.css']
})
export class EmployeeDelailComponent implements OnInit {
  public employees = [
    {"id": 1, "name":"Andrew", "age": 45},
    {"id": 2, "name":"Lola", "age": 25},
    {"id": 3, "name":"Lisa", "age": 32},
    {"id": 4, "name":"Boby", "age": 65},
    {"id": 5, "name":"John", "age": 52},
    {"id": 6, "name":"Karlson", "age": 18},
    {"id": 7, "name":"Malysh", "age": 15}
  ];
  constructor() { }

  ngOnInit() {
  }

}
