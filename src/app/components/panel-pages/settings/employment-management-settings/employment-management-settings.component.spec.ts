import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentManagementSettingsComponent } from './employment-management-settings.component';

describe('EmploymentManagementSettingsComponent', () => {
  let component: EmploymentManagementSettingsComponent;
  let fixture: ComponentFixture<EmploymentManagementSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentManagementSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentManagementSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
