import { Component, OnInit, Inject } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

interface LabeledValue {
  size: number;
  label: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit  {

  list:any = [
    {'name': 'Gopal', 'age':32, 'profession': 'software developer'},
    {'name': 'Raja', 'age':45, 'profession': 'software tester'}
  ]
  constructor() { }

  ngOnInit() {
  }
  





}
