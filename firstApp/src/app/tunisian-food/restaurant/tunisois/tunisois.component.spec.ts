import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunisoisComponent } from './tunisois.component';

describe('TunisoisComponent', () => {
  let component: TunisoisComponent;
  let fixture: ComponentFixture<TunisoisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TunisoisComponent]
    });
    fixture = TestBed.createComponent(TunisoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
