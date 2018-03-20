import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-delail',
  templateUrl: './employee-delail.component.html',
  styleUrls: ['./employee-delail.component.css']
})
export class EmployeeDelailComponent implements OnInit {
  public employees = [];
  public errorMsg;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                    error => this.errorMsg = error);
  }
}
