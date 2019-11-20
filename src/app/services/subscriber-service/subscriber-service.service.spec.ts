import { TestBed, inject } from '@angular/core/testing';

import { SubscriberServiceService } from './subscriber-service.service';

describe('SubscriberServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscriberServiceService]
    });
  });

  it('should be created', inject([SubscriberServiceService], (service: SubscriberServiceService) => {
    expect(service).toBeTruthy();
  }));
});
