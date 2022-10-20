import { TestBed } from '@angular/core/testing';

import { CursosGuard } from './cursos.guard';

describe('CursosGuardService', () => {
  let service: CursosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
