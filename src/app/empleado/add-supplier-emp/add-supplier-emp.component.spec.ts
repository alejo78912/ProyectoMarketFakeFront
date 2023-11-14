import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupplierEmpComponent } from './add-supplier-emp.component';

describe('AddSupplierEmpComponent', () => {
  let component: AddSupplierEmpComponent;
  let fixture: ComponentFixture<AddSupplierEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSupplierEmpComponent]
    });
    fixture = TestBed.createComponent(AddSupplierEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
