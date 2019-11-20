import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePositionTypesComponent } from './manage-position-types.component';

describe('ManagePositionTypesComponent', () => {
  let component: ManagePositionTypesComponent;
  let fixture: ComponentFixture<ManagePositionTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePositionTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePositionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
