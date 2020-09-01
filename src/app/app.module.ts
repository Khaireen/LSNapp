import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  TableComponent
} from './table/table.component';
import {
  MatTableModule
} from '@angular/material/table';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatPaginatorModule
} from '@angular/material/paginator';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatSortModule
} from '@angular/material/sort';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatIconModule
} from '@angular/material/icon';
import {
  MatDialogModule
} from '@angular/material/dialog';
import {
  MatSelectModule
} from '@angular/material/select';
import {
  AddUserDialogComponent
} from './dialogs/add-user-dialog/add-user-dialog.component';
import {
  EditUserDialogComponent
} from './dialogs/edit-user-dialog/edit-user-dialog.component';
import {
  DeleteUserDialogComponent
} from './dialogs/delete-user-dialog/delete-user-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AddUserDialogComponent,
    EditUserDialogComponent,
    DeleteUserDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
