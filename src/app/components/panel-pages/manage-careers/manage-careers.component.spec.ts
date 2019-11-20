import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCareersComponent } from './manage-careers.component';

describe('ManageCareersComponent', () => {
  let component: ManageCareersComponent;
  let fixture: ComponentFixture<ManageCareersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCareersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
