import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryConfigurationsComponent } from './gallery-configurations.component';

describe('GalleryConfigurationsComponent', () => {
  let component: GalleryConfigurationsComponent;
  let fixture: ComponentFixture<GalleryConfigurationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryConfigurationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
