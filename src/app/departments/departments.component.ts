import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  departments=[
    {"name":"Angular","id":1},
    {"name":"MVC","id":2},
    {"name":"C#","id":3},
    {"name":"Database","id":4}

  ]
  selectedId:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.selectedId=params.get("id");
    })
  }

  goToDepartmentDetails(deptId:any)
  {
   this.router.navigate(["/department",deptId]);
  }

}
