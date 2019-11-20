import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEntertainersBiosComponent } from './manage-entertainers-bios.component';

describe('ManageEntertainersBiosComponent', () => {
  let component: ManageEntertainersBiosComponent;
  let fixture: ComponentFixture<ManageEntertainersBiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEntertainersBiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEntertainersBiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
