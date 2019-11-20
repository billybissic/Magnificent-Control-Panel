import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityLandingPageComponent } from './security-landing-page.component';

describe('SecurityLandingPageComponent', () => {
  let component: SecurityLandingPageComponent;
  let fixture: ComponentFixture<SecurityLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
