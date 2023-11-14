import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryEmpComponent } from './add-category-emp.component';

describe('AddCategoryEmpComponent', () => {
  let component: AddCategoryEmpComponent;
  let fixture: ComponentFixture<AddCategoryEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCategoryEmpComponent]
    });
    fixture = TestBed.createComponent(AddCategoryEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
