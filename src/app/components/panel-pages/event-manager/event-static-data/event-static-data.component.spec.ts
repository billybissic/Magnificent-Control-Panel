import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventStaticDataComponent } from './event-static-data.component';

describe('EventStaticDataComponent', () => {
  let component: EventStaticDataComponent;
  let fixture: ComponentFixture<EventStaticDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventStaticDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventStaticDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
