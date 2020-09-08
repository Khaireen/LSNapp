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
  MatTableDataSource,
  MatTable
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
  AddUserDialogComponent
} from '../dialogs/add-user-dialog/add-user-dialog.component';
import {
  EditUserDialogComponent
} from '../dialogs/edit-user-dialog/edit-user-dialog.component';
import {
  DeleteUserDialogComponent
} from '../dialogs/delete-user-dialog/delete-user-dialog.component';
import {
  UserDataService
} from '../services/user-data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['enabled', 'username', 'firstName', 'lastName', 'role', 'actions'];
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
  usersData: User[];

  @ViewChild(MatPaginator, {
    static: true
  }) paginator: MatPaginator;
  @ViewChild(MatSort, {
    static: true
  }) sort: MatSort;
  @ViewChild(MatTable) table: MatTable < any > ;

  constructor(public dialog: MatDialog, private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editUser(user: object): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = user;
    const editUserDialogRef = this.dialog.open(EditUserDialogComponent, dialogConfig);
    editUserDialogRef.afterClosed().subscribe(result => {
      this.userDataService.editUser(result);
      this.refresh();
    });
  }

  deleteUser(id: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = id;
    const deleteUserDialogRef = this.dialog.open(DeleteUserDialogComponent, dialogConfig);
    deleteUserDialogRef.afterClosed().subscribe(result => {
      this.userDataService.deleteUser(result);
      this.refresh();
    });
  }

  addUser(): void {
    const addUserDialogRef = this.dialog.open(AddUserDialogComponent);
    addUserDialogRef.afterClosed().subscribe(result => {
      this.userDataService.addUser(result);
      this.refresh();
    });
  }

  // prepares table to render
  setTable(users: User[]): void {
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // fetches array of users from service
  getUsers(): void {
    this.userDataService.getUsers()
      .then(response => {
        this.usersData = response;
        this.setTable(this.usersData);
      })
      .catch(error => alert(error));
  }

  // reloads table with new data
  private refresh(): void {
    this.dataSource = new MatTableDataSource(this.usersData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.table.renderRows();
  }
}
