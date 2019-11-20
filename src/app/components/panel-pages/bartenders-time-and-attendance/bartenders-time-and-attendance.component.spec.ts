import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartendersTimeAndAttendanceComponent } from './bartenders-time-and-attendance.component';

describe('BartendersTimeAndAttendanceComponent', () => {
  let component: BartendersTimeAndAttendanceComponent;
  let fixture: ComponentFixture<BartendersTimeAndAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartendersTimeAndAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartendersTimeAndAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
