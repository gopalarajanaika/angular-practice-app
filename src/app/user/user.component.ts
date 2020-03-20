import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { fromEvent } from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: string;
  counter: number;
  constructor(private userService: UserService) { }



  ngOnInit() {
    this.userService.userSubject.subscribe(user => this.user = user);
    this.userService.counterSubject.subscribe(count => this.counter = count)


    let button = document.querySelectorAll('button');
    fromEvent(button, 'click')
      .subscribe(() => console.log('Clicked!'));
  }


  changeValue() {
    this.userService.changeValue(this.user)
  }

  nextCount(){
    this.userService.nextCount()
  }

}
