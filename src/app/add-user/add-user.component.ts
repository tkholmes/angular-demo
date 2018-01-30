import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../data-model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, OnDestroy {

  _destroyed$: Subject<boolean> = new Subject();

  symbols = [
    "fa fa-ravelry",
    "fa fa-credit-card-alt",
    "fa fa-eye",
    "fa fa-bolt",
    "fa fa-fire",
    "fa fa-magic",
    "fa fa-thumbs-down",
    "fa fa-rocket",
    "fa fa-cog",
    "fa fa-wikipedia-w"
  ];

  newUser: FormGroup;

  constructor(fb: FormBuilder, private _userService: UserService) {
    this.newUser = fb.group(new User());
  }

  ngOnInit() {
    this._userService.users
      .takeUntil(this._destroyed$)
      .subscribe(users => {
        this.newUser.value.id = users.reduce((prev, current) => prev > current.id ? prev : current.id, 0) + 1;
      });
  }

  addUser() {
    this._userService.addUser(this.newUser.value);
    this.newUser.reset();
  }

  ngOnDestroy() {
    this._destroyed$.next(true);
  }
}
