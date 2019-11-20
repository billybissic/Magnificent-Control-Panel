import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddGalleryGroupTypeComponent } from './modal-add-gallery-group-type.component';

describe('ModalAddGalleryGroupTypeComponent', () => {
  let component: ModalAddGalleryGroupTypeComponent;
  let fixture: ComponentFixture<ModalAddGalleryGroupTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddGalleryGroupTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddGalleryGroupTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
