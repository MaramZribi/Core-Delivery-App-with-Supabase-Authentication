import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalienFoodComponent } from './italien-food.component';

describe('ItalienFoodComponent', () => {
  let component: ItalienFoodComponent;
  let fixture: ComponentFixture<ItalienFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItalienFoodComponent]
    });
    fixture = TestBed.createComponent(ItalienFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
