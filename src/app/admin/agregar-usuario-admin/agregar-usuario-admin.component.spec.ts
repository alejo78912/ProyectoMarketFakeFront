import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarUsuarioAdminComponent } from './agregar-usuario-admin.component';

describe('AgregarUsuarioAdminComponent', () => {
  let component: AgregarUsuarioAdminComponent;
  let fixture: ComponentFixture<AgregarUsuarioAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarUsuarioAdminComponent]
    });
    fixture = TestBed.createComponent(AgregarUsuarioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
