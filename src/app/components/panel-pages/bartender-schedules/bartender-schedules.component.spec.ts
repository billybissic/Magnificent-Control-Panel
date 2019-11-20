import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartenderSchedulesComponent } from './bartender-schedules.component';

describe('BartenderSchedulesComponent', () => {
  let component: BartenderSchedulesComponent;
  let fixture: ComponentFixture<BartenderSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartenderSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartenderSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
