import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCalendarHeadersComponent } from './manage-calendar-headers.component';

describe('ManageCalendarHeadersComponent', () => {
  let component: ManageCalendarHeadersComponent;
  let fixture: ComponentFixture<ManageCalendarHeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCalendarHeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCalendarHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
