import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationCardsComponent } from './navigation-cards.component';

describe('NavigationCardsComponent', () => {
  let component: NavigationCardsComponent;
  let fixture: ComponentFixture<NavigationCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
