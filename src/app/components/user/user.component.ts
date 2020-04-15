import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { fromEvent } from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  unsavedChanges = true;
  constructor() { }

  ngOnInit() {
  }

}
