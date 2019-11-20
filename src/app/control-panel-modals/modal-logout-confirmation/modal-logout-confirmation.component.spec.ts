import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLogoutConfirmationComponent } from './modal-logout-confirmation.component';

describe('ModalLogoutConfirmationComponent', () => {
  let component: ModalLogoutConfirmationComponent;
  let fixture: ComponentFixture<ModalLogoutConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLogoutConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLogoutConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
