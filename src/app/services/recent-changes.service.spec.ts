import { TestBed } from '@angular/core/testing';

import { RecentChangesService } from './recent-changes.service';

describe('RecentChangesService', () => {
  let service: RecentChangesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentChangesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
