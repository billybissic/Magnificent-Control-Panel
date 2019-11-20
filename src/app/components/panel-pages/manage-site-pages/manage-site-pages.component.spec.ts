import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSitePagesComponent } from './manage-site-pages.component';

describe('ManageSitePagesComponent', () => {
  let component: ManageSitePagesComponent;
  let fixture: ComponentFixture<ManageSitePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSitePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSitePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
