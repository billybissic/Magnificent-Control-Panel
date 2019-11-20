import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEventFlyersComponent } from './manage-event-flyers.component';

describe('ManageEventFlyersComponent', () => {
  let component: ManageEventFlyersComponent;
  let fixture: ComponentFixture<ManageEventFlyersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEventFlyersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEventFlyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
