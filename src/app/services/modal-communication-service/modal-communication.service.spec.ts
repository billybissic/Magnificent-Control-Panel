import { TestBed, inject } from '@angular/core/testing';

import { ModalCommunicationService } from './modal-communication.service';

describe('ModalCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalCommunicationService]
    });
  });

  it('should be created', inject([ModalCommunicationService], (service: ModalCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
