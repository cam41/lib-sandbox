import { TestBed } from '@angular/core/testing';

import { DemolibService } from './demolib.service';

describe('DemolibService', () => {
  let service: DemolibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemolibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
