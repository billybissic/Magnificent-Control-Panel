import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVolunteerPositionTypesComponent } from './manage-volunteer-position-types.component';

describe('ManageVolunteerPositionTypesComponent', () => {
  let component: ManageVolunteerPositionTypesComponent;
  let fixture: ComponentFixture<ManageVolunteerPositionTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVolunteerPositionTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVolunteerPositionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
