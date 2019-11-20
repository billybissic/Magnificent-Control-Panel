import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelWidgetsComponent } from './panel-widgets.component';

describe('PanelWidgetsComponent', () => {
  let component: PanelWidgetsComponent;
  let fixture: ComponentFixture<PanelWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
