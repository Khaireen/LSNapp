import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { UserDataService } from '../services/user-data.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      providers: [UserDataService],
      imports: [MatDialogModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
