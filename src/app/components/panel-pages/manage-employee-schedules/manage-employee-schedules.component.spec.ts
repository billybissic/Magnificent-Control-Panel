import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployeeSchedulesComponent } from './manage-employee-schedules.component';

describe('ManageEmployeeSchedulesComponent', () => {
  let component: ManageEmployeeSchedulesComponent;
  let fixture: ComponentFixture<ManageEmployeeSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEmployeeSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmployeeSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
