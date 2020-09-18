import { TestBed } from '@angular/core/testing';

import { UserDataService } from './user-data.service';
import { USER_ROLE } from '../models/UserRole';

describe('UserDataService', () => {
  let service: UserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve users', action => {
    const result = service.getUsers();
    let usersTable = [];
    result.then(response => usersTable = response);
    expect(usersTable.length === 7).toBeTruthy();
  });

  it('should add new user', () => {
    let usersTableLength = service.getUsers().then(response => usersTableLength = response.length);

    const result = service.addUser({
      id: 11,
      firstName: 'Leanne',
      lastName: 'Graham',
      username: 'Bret',
      role: USER_ROLE.ADMIN,
      enabled: true
    });
    expectAsync(usersTableLength !== result);
  });
});
