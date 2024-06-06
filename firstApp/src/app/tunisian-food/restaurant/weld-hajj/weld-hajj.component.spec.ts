import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldHajjComponent } from './weld-hajj.component';

describe('WeldHajjComponent', () => {
  let component: WeldHajjComponent;
  let fixture: ComponentFixture<WeldHajjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeldHajjComponent]
    });
    fixture = TestBed.createComponent(WeldHajjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
