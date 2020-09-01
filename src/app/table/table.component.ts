import {
  Component,
  ViewChild
} from '@angular/core';
import {
  MatPaginator
} from '@angular/material/paginator';
import {
  MatSort
} from '@angular/material/sort';
import {
  MatTableDataSource
} from '@angular/material/table';
import {
  MatDialog,
  MatDialogConfig
} from '@angular/material/dialog';
import {
  User
} from '../models/User.interface';
import {
  Roles
} from '../models/Roles.interface';
import {
  OnInit
} from '@angular/core';
import {
  USER_ROLE
} from '../models/UserRole';
import {
  AddUserDialogComponent
} from '../dialogs/add-user-dialog/add-user-dialog.component';
import {
  EditUserDialogComponent
} from '../dialogs/edit-user-dialog/edit-user-dialog.component';
import {
  DeleteUserDialogComponent
} from '../dialogs/delete-user-dialog/delete-user-dialog.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'firstName', 'lastName', 'role', 'actions'];
  dataSource: MatTableDataSource < User > ;
  roles: Roles[] = [{
      value: 'admin',
      viewValue: 'admin'
    },
    {
      value: 'user',
      viewValue: 'user'
    }
  ];

  @ViewChild(MatPaginator, {
    static: true
  }) paginator: MatPaginator;
  @ViewChild(MatSort, {
    static: true
  }) sort: MatSort;

  constructor(public dialog: MatDialog) {
    const usersData = [{
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
      },
    ];
    this.dataSource = new MatTableDataSource(usersData);
    console.log(this.dataSource);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public openEditUserDialog(user: object): void {
    console.log('modify', user);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = user;
    const editUserDialogRef = this.dialog.open(EditUserDialogComponent, dialogConfig);

    editUserDialogRef.afterClosed().subscribe(result => console.log('modify dialog result', result));

  }

  public openDeleteUserDialog(id: number): void {
    console.log('delete', id);
    const deleteUserDialogRef = this.dialog.open(DeleteUserDialogComponent);
    deleteUserDialogRef.afterClosed().subscribe(result => console.log('delete user dialog', result));
  }

  public openAddUserDialog(): void {
    console.log('add');
    const addUserDialogRef = this.dialog.open(AddUserDialogComponent);
    addUserDialogRef.afterClosed().subscribe(result => console.log('add user dialog', result));
  }
}
