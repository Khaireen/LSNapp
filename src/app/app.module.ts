// Angular modules
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  ReactiveFormsModule, FormsModule
} from '@angular/forms';
import {
  AppRoutingModule
} from './app-routing.module';

// Material
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
  MatCheckboxModule
} from '@angular/material/checkbox';

// Components
import {
  AppComponent
} from './app.component';
import {
  TableComponent
} from './table/table.component';
import {
  AddUserDialogComponent
} from './dialogs/add-user-dialog/add-user-dialog.component';
import {
  EditUserDialogComponent
} from './dialogs/edit-user-dialog/edit-user-dialog.component';
import {
  DeleteUserDialogComponent
} from './dialogs/delete-user-dialog/delete-user-dialog.component';

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
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
