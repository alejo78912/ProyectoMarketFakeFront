import { TestBed } from '@angular/core/testing';

import { CategoriasListarService } from './categorias-listar.service';

describe('CategoriasListarService', () => {
  let service: CategoriasListarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriasListarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
