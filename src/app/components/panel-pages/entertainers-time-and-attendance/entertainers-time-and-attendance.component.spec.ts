import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainersTimeAndAttendanceComponent } from './entertainers-time-and-attendance.component';

describe('EntertainersTimeAndAttendanceComponent', () => {
  let component: EntertainersTimeAndAttendanceComponent;
  let fixture: ComponentFixture<EntertainersTimeAndAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainersTimeAndAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainersTimeAndAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
