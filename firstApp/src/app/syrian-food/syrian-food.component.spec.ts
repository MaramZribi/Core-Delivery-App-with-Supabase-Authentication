import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyrianFoodComponent } from './syrian-food.component';

describe('SyrianFoodComponent', () => {
  let component: SyrianFoodComponent;
  let fixture: ComponentFixture<SyrianFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyrianFoodComponent]
    });
    fixture = TestBed.createComponent(SyrianFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
