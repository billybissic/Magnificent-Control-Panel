import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEntertainerApplicationsComponent } from './manage-entertainer-applications.component';

describe('ManageEntertainerApplicationsComponent', () => {
  let component: ManageEntertainerApplicationsComponent;
  let fixture: ComponentFixture<ManageEntertainerApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEntertainerApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEntertainerApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
