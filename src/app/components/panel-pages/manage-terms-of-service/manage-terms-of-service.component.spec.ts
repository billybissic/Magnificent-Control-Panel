import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTermsOfServiceComponent } from './manage-terms-of-service.component';

describe('ManageTermsOfServiceComponent', () => {
  let component: ManageTermsOfServiceComponent;
  let fixture: ComponentFixture<ManageTermsOfServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTermsOfServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTermsOfServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
