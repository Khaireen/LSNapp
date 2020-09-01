import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.component.css']
})
export class DeleteUserDialogComponent implements OnInit {
  userId: number;

  constructor(private dialogRef: MatDialogRef < DeleteUserDialogComponent > , @Inject(MAT_DIALOG_DATA) data) {
    this.userId = data;
  }

  ngOnInit(): void {}

  save(): void {
    this.dialogRef.close(this.userId);
  }

  close(): void {
    this.dialogRef.close();
  }
}
