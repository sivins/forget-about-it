import { TestBed, inject } from '@angular/core/testing';

import { PicklistService } from './picklist.service';

describe('PicklistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PicklistService]
    });
  });

  it('should be created', inject([PicklistService], (service: PicklistService) => {
    expect(service).toBeTruthy();
  }));
});
