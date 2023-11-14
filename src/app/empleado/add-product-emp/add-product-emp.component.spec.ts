import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductEmpComponent } from './add-product-emp.component';

describe('AddProductEmpComponent', () => {
  let component: AddProductEmpComponent;
  let fixture: ComponentFixture<AddProductEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductEmpComponent]
    });
    fixture = TestBed.createComponent(AddProductEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
