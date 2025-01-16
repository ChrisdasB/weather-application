import { TestBed } from '@angular/core/testing';

import { WaetherService } from './waether.service';

describe('WaetherService', () => {
  let service: WaetherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaetherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
