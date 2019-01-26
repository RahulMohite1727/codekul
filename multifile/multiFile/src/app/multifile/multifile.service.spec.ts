import { TestBed } from '@angular/core/testing';

import { MultifileService } from './multifile.service';

describe('MultifileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultifileService = TestBed.get(MultifileService);
    expect(service).toBeTruthy();
  });
});
