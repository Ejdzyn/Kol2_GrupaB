import { TestBed } from '@angular/core/testing';

import { AWDataService } from './aw-data.service';

describe('AWDataService', () => {
  let service: AWDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AWDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
