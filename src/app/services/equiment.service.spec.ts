import { TestBed, inject } from '@angular/core/testing';

import { EquimentService } from './equiment.service';

describe('EquimentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquimentService]
    });
  });

  it('should be created', inject([EquimentService], (service: EquimentService) => {
    expect(service).toBeTruthy();
  }));
});
