import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDisclaimerComponent } from './manage-disclaimer.component';

describe('ManageDisclaimerComponent', () => {
  let component: ManageDisclaimerComponent;
  let fixture: ComponentFixture<ManageDisclaimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDisclaimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
