import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsFormManagerComponent } from './reservations-form-manager.component';

describe('ReservationsFormManagerComponent', () => {
  let component: ReservationsFormManagerComponent;
  let fixture: ComponentFixture<ReservationsFormManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationsFormManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsFormManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
