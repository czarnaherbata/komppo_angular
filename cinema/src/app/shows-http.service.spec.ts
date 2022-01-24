import { TestBed } from '@angular/core/testing';

import { ShowsHttpService } from './shows-http.service';

describe('ShowsHttpService', () => {
  let service: ShowsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
