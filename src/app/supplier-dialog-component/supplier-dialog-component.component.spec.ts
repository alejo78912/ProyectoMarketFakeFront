import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDialogComponentComponent } from './supplier-dialog-component.component';

describe('SupplierDialogComponentComponent', () => {
  let component: SupplierDialogComponentComponent;
  let fixture: ComponentFixture<SupplierDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierDialogComponentComponent]
    });
    fixture = TestBed.createComponent(SupplierDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
