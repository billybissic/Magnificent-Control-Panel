import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageContentWarningComponent } from './manage-content-warning.component';

describe('ManageContentWarningComponent', () => {
  let component: ManageContentWarningComponent;
  let fixture: ComponentFixture<ManageContentWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageContentWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageContentWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
