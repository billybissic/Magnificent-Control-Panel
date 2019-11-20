import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePrivacyPolicyComponent } from './manage-privacy-policy.component';

describe('ManagePrivacyPolicyComponent', () => {
  let component: ManagePrivacyPolicyComponent;
  let fixture: ComponentFixture<ManagePrivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePrivacyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
