import { TestBed } from '@angular/core/testing';

import { Prueba1ResolveService } from './prueba1-resolve.service';

describe('Prueba1ResolveService', () => {
  let service: Prueba1ResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Prueba1ResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
