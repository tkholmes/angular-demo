import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { User } from '../data-model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css'],
  providers: [UserService]
})
export class UserSettingsComponent implements OnInit {
  user: User;
  private _userId;

  constructor(private _route: ActivatedRoute, private _userService: UserService) { }

  ngOnInit() {
    this._route.paramMap
      .switchMap((params: ParamMap) => {
        this._userId = +params.get("userId");
        return this._userService.users.switchMap((users: User[]) => Observable.of(users.find(user => user.id === this._userId)))
      })
      .subscribe(user =>
        this.user = user);

  }

  valueChanged($event) {
    this._userService.modifyUser(this._userId, 'isAwesome', $event.checked);
  }
}
