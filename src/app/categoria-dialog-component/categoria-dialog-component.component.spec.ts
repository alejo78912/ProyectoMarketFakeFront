import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaDialogComponentComponent } from './categoria-dialog-component.component';

describe('CategoriaDialogComponentComponent', () => {
  let component: CategoriaDialogComponentComponent;
  let fixture: ComponentFixture<CategoriaDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaDialogComponentComponent]
    });
    fixture = TestBed.createComponent(CategoriaDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
