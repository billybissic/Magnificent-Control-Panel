import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageArrangementTypesComponent } from './manage-arrangement-types.component';

describe('ManageArrangementTypesComponent', () => {
  let component: ManageArrangementTypesComponent;
  let fixture: ComponentFixture<ManageArrangementTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageArrangementTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageArrangementTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
