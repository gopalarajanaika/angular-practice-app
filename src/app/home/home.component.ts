import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(UserService) private userService) { }

  ngOnInit() {
    console.log(this.userService);
  }

}
