import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulesComponent } from './formules.component';

describe('FormulesComponent', () => {
  let component: FormulesComponent;
  let fixture: ComponentFixture<FormulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulesComponent]
    });
    fixture = TestBed.createComponent(FormulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
