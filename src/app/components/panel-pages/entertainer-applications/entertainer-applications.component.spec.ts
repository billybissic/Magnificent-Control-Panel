import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainerApplicationsComponent } from './entertainer-applications.component';

describe('EntertainerApplicationsComponent', () => {
  let component: EntertainerApplicationsComponent;
  let fixture: ComponentFixture<EntertainerApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainerApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainerApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
