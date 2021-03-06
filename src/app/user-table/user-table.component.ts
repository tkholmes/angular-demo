import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { User } from '../data-model';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit, OnDestroy {

  _destroyed$: Subject<boolean> = new Subject();

  users: MatTableDataSource<User>;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.users = new MatTableDataSource();

    this._userService.users
      .takeUntil(this._destroyed$)
      .subscribe((users) => {
        this.users.data = users;
      });
  }

  ngOnDestroy() {
    this._destroyed$.next(true);
  }
}
