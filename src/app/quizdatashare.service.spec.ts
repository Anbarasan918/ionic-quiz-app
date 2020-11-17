import { TestBed } from '@angular/core/testing';

import { QuizdatashareService } from './quizdatashare.service';

describe('QuizdatashareService', () => {
  let service: QuizdatashareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizdatashareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
