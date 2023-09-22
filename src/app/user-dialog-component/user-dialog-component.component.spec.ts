import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDialogComponentComponent } from './user-dialog-component.component';

describe('UserDialogComponentComponent', () => {
  let component: UserDialogComponentComponent;
  let fixture: ComponentFixture<UserDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDialogComponentComponent]
    });
    fixture = TestBed.createComponent(UserDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
