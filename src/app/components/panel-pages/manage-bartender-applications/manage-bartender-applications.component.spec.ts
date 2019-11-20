import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBartenderApplicationsComponent } from './manage-bartender-applications.component';

describe('ManageBartenderApplicationsComponent', () => {
  let component: ManageBartenderApplicationsComponent;
  let fixture: ComponentFixture<ManageBartenderApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBartenderApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBartenderApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
