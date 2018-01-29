import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './data-model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

  users: Observable<User[]>;

  private _users: BehaviorSubject<User[]>;

  constructor() {
    this._users = new BehaviorSubject<User[]>([]);
    this.users = this._users.asObservable();
  }

  addUser(user: User) {
    var users = this._users.value;
    users.push(user);
    this._users.next(users);
  }

}
