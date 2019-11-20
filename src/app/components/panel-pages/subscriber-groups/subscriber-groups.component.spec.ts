import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberGroupsComponent } from './subscriber-groups.component';

describe('SubscriberGroupsComponent', () => {
  let component: SubscriberGroupsComponent;
  let fixture: ComponentFixture<SubscriberGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
