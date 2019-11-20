import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLockComponent } from './modal-lock.component';

describe('ModalLockComponent', () => {
  let component: ModalLockComponent;
  let fixture: ComponentFixture<ModalLockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
