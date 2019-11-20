import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReadMessageComponent } from './modal-read-message.component';

describe('ModalReadMessageComponent', () => {
  let component: ModalReadMessageComponent;
  let fixture: ComponentFixture<ModalReadMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalReadMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReadMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
