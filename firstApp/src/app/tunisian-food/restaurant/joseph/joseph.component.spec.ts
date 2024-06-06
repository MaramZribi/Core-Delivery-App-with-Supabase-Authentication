import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JosephComponent } from './joseph.component';

describe('JosephComponent', () => {
  let component: JosephComponent;
  let fixture: ComponentFixture<JosephComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JosephComponent]
    });
    fixture = TestBed.createComponent(JosephComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
