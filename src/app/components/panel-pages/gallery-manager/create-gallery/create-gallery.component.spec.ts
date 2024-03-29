import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGalleryComponent } from './create-gallery.component';

describe('GalleryManagerComponent', () => {
  let component: CreateGalleryComponent;
  let fixture: ComponentFixture<CreateGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
