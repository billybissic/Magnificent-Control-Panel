import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOkCancelComponent } from './modal-ok-cancel.component';

describe('ModalOkCancelComponent', () => {
  let component: ModalOkCancelComponent;
  let fixture: ComponentFixture<ModalOkCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOkCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOkCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
