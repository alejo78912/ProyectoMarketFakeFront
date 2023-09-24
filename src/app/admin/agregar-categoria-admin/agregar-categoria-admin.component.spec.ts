import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCategoriaAdminComponent } from './agregar-categoria-admin.component';

describe('AgregarCategoriaAdminComponent', () => {
  let component: AgregarCategoriaAdminComponent;
  let fixture: ComponentFixture<AgregarCategoriaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarCategoriaAdminComponent]
    });
    fixture = TestBed.createComponent(AgregarCategoriaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
