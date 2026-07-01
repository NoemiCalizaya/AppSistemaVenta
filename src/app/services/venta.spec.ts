import { TestBed } from '@angular/core/testing';

import { VentaService } from './venta';

describe('Venta', () => {
  let service: VentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
