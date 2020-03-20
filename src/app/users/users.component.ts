import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user:string;
  counter:number;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userSubject.subscribe(user => this.user = user);
    this.userService.counterSubject.subscribe(count => this.counter = count)
  }

  changeValue(){
    this.userService.changeValue(this.user)
  }


}
