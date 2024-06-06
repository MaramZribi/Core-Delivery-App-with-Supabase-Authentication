import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunisianFoodComponent } from './tunisian-food.component';

describe('TunisianFoodComponent', () => {
  let component: TunisianFoodComponent;
  let fixture: ComponentFixture<TunisianFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TunisianFoodComponent]
    });
    fixture = TestBed.createComponent(TunisianFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
