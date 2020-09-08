import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericFormFieldComponent } from './numeric-form-field.component';

describe('NumericFormFieldComponent', () => {
  let component: NumericFormFieldComponent;
  let fixture: ComponentFixture<NumericFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
