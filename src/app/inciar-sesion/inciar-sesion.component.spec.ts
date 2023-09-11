import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSesionComponent } from './inciar-sesion.component';

describe('InciarSesionComponent', () => {
  let component: IniciarSesionComponent;
  let fixture: ComponentFixture<IniciarSesionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IniciarSesionComponent]
    });
    fixture = TestBed.createComponent(IniciarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
