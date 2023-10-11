import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveaslotComponent } from './reserveaslot.component';

describe('ReserveaslotComponent', () => {
  let component: ReserveaslotComponent;
  let fixture: ComponentFixture<ReserveaslotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReserveaslotComponent]
    });
    fixture = TestBed.createComponent(ReserveaslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
