import { TestBed } from '@angular/core/testing';

import { IpaddressService } from './ipaddress.service';

describe('IpaddressService', () => {
  let service: IpaddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpaddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
