import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor() { }

  displayH2:boolean=false;
  fullName:string="Ahmed Mohamed";

  isLoggedIn:boolean=true;

  color:string="yellow";

  persons=[
    {"name":"Ahmed","age":50},
    {"name":"Basma","age":24},
    {"name":"Merna","age":27},
    {"name":"Mahmoud","age":30}
  ]

  ngOnInit(): void {
  }

}
