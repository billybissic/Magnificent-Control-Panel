import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePositionStatusesComponent } from './manage-position-statuses.component';

describe('ManagePositionStatusesComponent', () => {
  let component: ManagePositionStatusesComponent;
  let fixture: ComponentFixture<ManagePositionStatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePositionStatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePositionStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
