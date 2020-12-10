import { TestBed } from '@angular/core/testing';

import { ProfesorAuthGuard } from './profesor-auth.guard';

describe('ProfesorAuthGuard', () => {
  let guard: ProfesorAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfesorAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
