import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoltanaComponent } from './soltana.component';

describe('SoltanaComponent', () => {
  let component: SoltanaComponent;
  let fixture: ComponentFixture<SoltanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoltanaComponent]
    });
    fixture = TestBed.createComponent(SoltanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
