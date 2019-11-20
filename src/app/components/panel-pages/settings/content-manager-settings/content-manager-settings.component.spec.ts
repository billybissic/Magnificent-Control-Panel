import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentManagerSettingsComponent } from './content-manager-settings.component';

describe('ContentManagerSettingsComponent', () => {
  let component: ContentManagerSettingsComponent;
  let fixture: ComponentFixture<ContentManagerSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentManagerSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentManagerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
