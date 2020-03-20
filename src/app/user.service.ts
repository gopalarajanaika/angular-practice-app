import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class UserService {

  userSubject = new BehaviorSubject(null);
  counterSubject = new Subject<number>();
  count = 0;
  constructor() { }

  changeValue(user) {
    this.userSubject.next(user);
  }

  nextCount() {
    this.counterSubject.next(++this.count);
  }

}
