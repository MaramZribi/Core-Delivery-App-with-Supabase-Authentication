import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdoiseComponent } from './ardoise.component';

describe('ArdoiseComponent', () => {
  let component: ArdoiseComponent;
  let fixture: ComponentFixture<ArdoiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArdoiseComponent]
    });
    fixture = TestBed.createComponent(ArdoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
