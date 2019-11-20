import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainerSchedulesComponent } from './entertainer-schedules.component';

describe('EntertainerSchedulesComponent', () => {
  let component: EntertainerSchedulesComponent;
  let fixture: ComponentFixture<EntertainerSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainerSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainerSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
