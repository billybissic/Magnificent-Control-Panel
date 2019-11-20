import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEntertainersComponent } from './manage-entertainers.component';

describe('ManageEntertainersComponent', () => {
  let component: ManageEntertainersComponent;
  let fixture: ComponentFixture<ManageEntertainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEntertainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEntertainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
