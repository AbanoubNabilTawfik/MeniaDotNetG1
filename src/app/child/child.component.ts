import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  //  @Input() parentData="";
  @Input('parentData') message="";

  @Output() childEvent=new EventEmitter();


  ngOnInit(): void {
  }
  fireEvent()
  {
    this.childEvent.emit("Hello parent from child")
  }

  logMsg()
  {
    console.log("Hello im child")
  }

}
