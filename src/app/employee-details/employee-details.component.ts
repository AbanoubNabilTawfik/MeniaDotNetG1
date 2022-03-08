import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  employees:any=[];
  errorMessage="";
  ngOnInit(): void {
    //this.employees=this.employeeService.getEmployees();
    this.employeeService.getEmployees().subscribe(data=>
      {
        this.employees=data;
      },
      error=>
      {
       this.errorMessage=error;
      })
  }

}
