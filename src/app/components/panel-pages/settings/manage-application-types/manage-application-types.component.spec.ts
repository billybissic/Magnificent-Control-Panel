import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageApplicationTypesComponent } from './manage-application-types.component';

describe('ManageApplicationTypesComponent', () => {
  let component: ManageApplicationTypesComponent;
  let fixture: ComponentFixture<ManageApplicationTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageApplicationTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageApplicationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
