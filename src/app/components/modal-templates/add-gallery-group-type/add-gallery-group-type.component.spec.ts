import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGalleryGroupTypeComponent } from './add-gallery-group-type.component';

describe('AddGalleryGroupTypeComponent', () => {
  let component: AddGalleryGroupTypeComponent;
  let fixture: ComponentFixture<AddGalleryGroupTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGalleryGroupTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGalleryGroupTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
