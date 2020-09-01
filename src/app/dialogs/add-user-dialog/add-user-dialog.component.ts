import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder
} from '@angular/forms';
import {
  MatDialogRef
} from '@angular/material/dialog';
import {
  EditUserDialogComponent
} from '../edit-user-dialog/edit-user-dialog.component';
import {
  USER_ROLE
} from 'src/app/models/UserRole';
import {
  Roles
} from 'src/app/models/Roles.interface';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {
  form: FormGroup;
  id: number;
  roles: Roles[] = [{
      value: 'admin',
      viewValue: 'admin'
    },
    {
      value: 'user',
      viewValue: 'user'
    }
  ];

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef < EditUserDialogComponent > ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      id: this.createNewId(),
      username: '',
      firstName: '',
      lastName: '',
      role: USER_ROLE.USER
    });
  }

  private createNewId(): number {
    const currentDate: Date = new Date();
    return currentDate.getTime();
  }

  save(): void {
    this.dialogRef.close(this.form.value);
  }

  close(): void {
    this.dialogRef.close();
  }
}
