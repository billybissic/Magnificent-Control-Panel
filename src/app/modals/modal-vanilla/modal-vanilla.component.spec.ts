import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVanillaComponent } from './modal-vanilla.component';

describe('ModalVanillaComponent', () => {
  let component: ModalVanillaComponent;
  let fixture: ComponentFixture<ModalVanillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVanillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
