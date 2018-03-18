import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-delail',
  templateUrl: './employee-delail.component.html',
  styleUrls: ['./employee-delail.component.css']
})
export class EmployeeDelailComponent implements OnInit {
  public employees = [];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
