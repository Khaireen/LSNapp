import {
  Injectable
} from '@angular/core';
import {
  USER_ROLE
} from '../models/UserRole';
import {
  User
} from '../models/User.interface';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private usersTable: User[];

  constructor() {
    this.usersTable = [{
        id: 1,
        firstName: 'Leanne',
        lastName: 'Graham',
        username: 'Bret',
        role: USER_ROLE.ADMIN,
        enabled: true
      },
      {
        id: 2,
        firstName: 'Ervin',
        lastName: 'Howell',
        username: 'Antonette',
        role: USER_ROLE.USER,
        enabled: false
      },
      {
        id: 3,
        firstName: 'Ervin',
        lastName: 'Howell',
        username: 'Antonette',
        role: USER_ROLE.USER,
        enabled: false
      },
      {
        id: 4,
        firstName: 'Ervin',
        lastName: 'Howell',
        username: 'Antonette',
        role: USER_ROLE.USER,
        enabled: false
      },
      {
        id: 5,
        firstName: 'Ervin',
        lastName: 'Howell',
        username: 'Antonette',
        role: USER_ROLE.USER,
        enabled: false
      },
      {
        id: 6,
        firstName: 'Ervin',
        lastName: 'Howell',
        username: 'Antonette',
        role: USER_ROLE.USER,
        enabled: false
      },
      {
        id: 7,
        firstName: 'Ervin',
        lastName: 'Howell',
        username: 'Antonette',
        role: USER_ROLE.USER,
        enabled: false
      }
    ];
  }

  // Retrieves table of users from endpoint
  getUsers(): Promise < any > {
    return new Promise(resolve => {
      resolve(this.usersTable);
    });
  }

  // Adds a user to an array od users
  addUser(user: User): number {
    this.usersTable.push(user);

    return this.usersTable.length;
    // return new Promise(resolve => {
    //   resolve(this.usersTable);
    // });
  }

  // Modifies selected user
  editUser(user: User): Promise < any > {
    const index = this.usersTable.map(elem => elem.id).indexOf(user.id);
    this.usersTable[index] = user;
    return new Promise(resolve => {
      resolve(this.usersTable);
    });
  }

  // Removes selected user from an array of users
  deleteUser(userId: number): Promise <any> {
    const index = this.usersTable.map(elem => elem.id).indexOf(userId);
    this.usersTable.splice(index, 1);
    return new Promise(resolve => {
      resolve(this.usersTable);
    });
  }
}
