import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  employees:any=[];
  errorMessage="";
  ngOnInit(): void {
    //this.employees=this.employeeService.getEmployees();
    this.employeeService.getEmployees().subscribe(employees=>
      {
        this.employees=employees;
      },
      error=>
      {
      this.errorMessage=error;
      })
  }

}
