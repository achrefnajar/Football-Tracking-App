import { TestBed } from '@angular/core/testing';

import { TeamApiService } from './team-api.service';

describe('TeamApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamApiService = TestBed.get(TeamApiService);
    expect(service).toBeTruthy();
  });
});
