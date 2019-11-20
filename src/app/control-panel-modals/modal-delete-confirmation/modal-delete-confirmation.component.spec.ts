import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteConfirmationComponent } from './modal-delete-confirmation.component';

describe('ModalDeleteConfirmationComponent', () => {
  let component: ModalDeleteConfirmationComponent;
  let fixture: ComponentFixture<ModalDeleteConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
