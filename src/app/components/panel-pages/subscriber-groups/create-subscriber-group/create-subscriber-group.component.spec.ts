import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubscriberGroupComponent } from './create-subscriber-group.component';

describe('CreateSubscriberGroupComponent', () => {
  let component: CreateSubscriberGroupComponent;
  let fixture: ComponentFixture<CreateSubscriberGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubscriberGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubscriberGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
