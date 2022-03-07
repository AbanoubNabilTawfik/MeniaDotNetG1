import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  @ViewChild(ChildComponent) child:ChildComponent= new ChildComponent();

  messageFromParent:string="Hello child from parent";
  messageFromChild=""

  ngOnInit(): void {
    //this.child.logMsg();
  }

  ngAfterViewInit()
  {
    this.child.logMsg();
  }

}
