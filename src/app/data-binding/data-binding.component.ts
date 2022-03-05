import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  firstNumber:number=5;
  firstName:string="Azza";
  href=window.location.href;

  txtId="thirdId"
  isDisabled:boolean=false;
  textColor:string="text-success";
  hasError:boolean=true;
  isSpecial:boolean=true;

  messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }

  myStyle={
    color:"red",
    fontStyle:"italic"
  }

  ngOnInit(): void {
  }

}
