import { TestBed } from '@angular/core/testing';

import { ArticulosMasVendidosService } from './articulos-mas-vendidos.service';

describe('ArticulosMasVendidosService', () => {
  let service: ArticulosMasVendidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticulosMasVendidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
