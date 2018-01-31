import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponent } from './add-user.component';
import { UserService } from '../user.service';
import { User } from '../data-model';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });

  //describe('When adding user', () => {
  //  let userService: UserService = new UserService();
  //  let userAdded: User;
  //  let userServiceSpy;
   
  //  beforeEach(() => {
  //    userServiceSpy = spyOn(userService, 'addUser')
  //      .and
  //      .callFake(user => userAdded = user);
  //  });

  //  it('should call addUser on user service', () => {
  //    component.newUser.setValue(new User());
  //    component.addUser();

  //    expect(userServiceSpy).toHaveBeenCalled();
  //  });

  //  it('should reset FormGroup', () => {
  //    component.newUser.setValue(new User());
  //    component.addUser();

  //    expect(component.newUser.value).toEqual(new User());
  //  });

  //});

});
