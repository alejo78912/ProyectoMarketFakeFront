import { TestBed } from '@angular/core/testing';

import { AgregarUsuarioAdminService } from './agregar-usuario-admin.service';

describe('AgregarUsuarioAdminService', () => {
  let service: AgregarUsuarioAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarUsuarioAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
