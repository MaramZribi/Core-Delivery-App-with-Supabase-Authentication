import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamazertComponent } from './tamazert.component';

describe('TamazertComponent', () => {
  let component: TamazertComponent;
  let fixture: ComponentFixture<TamazertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TamazertComponent]
    });
    fixture = TestBed.createComponent(TamazertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
