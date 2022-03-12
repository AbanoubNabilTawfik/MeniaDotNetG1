import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  constructor(private UserService:UserService) { }

  topics=["Angular","React","JavaScript"];
  userModel=new User("","ah@gmail.com","","Angular",true);

  ngOnInit(): void {
  }

  SendData()
  {
    console.log(this.userModel)
    this.UserService.postUser(this.userModel);
  }

}
