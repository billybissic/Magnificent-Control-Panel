import { TestBed, inject } from '@angular/core/testing';

import { SharedStaticDataService } from './shared-static-data.service';

describe('SharedStaticDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedStaticDataService]
    });
  });

  it('should be created', inject([SharedStaticDataService], (service: SharedStaticDataService) => {
    expect(service).toBeTruthy();
  }));
});
