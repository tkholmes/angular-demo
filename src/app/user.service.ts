import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './data-model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

  users: Observable<User[]>;

  private _users: BehaviorSubject<User[]>;
  private _initialUsers: User[] = [
    {
      name: "defaultUser",
      id: 0,
      speed:  15,
      direction:  'West',
      symbol: "fa fa-bolt",
      isAwesome: false
    }
  ]

  constructor() {
    this._users = new BehaviorSubject<User[]>(this._initialUsers);
    this.users = this._users.asObservable();
  }

  addUser(user: User) {
    var users = this._users.value;
    users.push(user);
    this._users.next(users);
  }

  modifyUser(userId: number, property: string, value: any) {
    const user = this._users.value.find(u => u.id === userId);
    if (user) {
      user[property] = value;

      const users = this._users.value.map(u => u.id === userId ? user : u);
      this._users.next(users);
    }
  }
}
