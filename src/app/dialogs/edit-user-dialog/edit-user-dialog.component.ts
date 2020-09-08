import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import {
  FormGroup,
  FormBuilder
} from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  User
} from 'src/app/models/User.interface';
import {
  Roles
} from 'src/app/models/Roles.interface';


@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {
  form: FormGroup;
  userData: User;
  roles: Roles[] = [{
      value: 'admin',
      viewValue: 'admin'
    },
    {
      value: 'user',
      viewValue: 'user'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef < EditUserDialogComponent >,
    @Inject(MAT_DIALOG_DATA) data) {
    this.userData = {
      enabled: data.enabled,
      id: data.id,
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role
    };
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      enabled: this.userData.enabled || false,
      id: this.userData.id,
      username: this.userData.username,
      firstName: this.userData.firstName,
      lastName: this.userData.lastName,
      role: this.userData.role
    });
  }

  save(): void {
    this.dialogRef.close(this.form.value);
  }

  close(): void {
    this.dialogRef.close();
  }
}
