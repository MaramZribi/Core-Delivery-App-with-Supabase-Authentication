import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosAmigosComponent } from './dos-amigos.component';

describe('DosAmigosComponent', () => {
  let component: DosAmigosComponent;
  let fixture: ComponentFixture<DosAmigosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DosAmigosComponent]
    });
    fixture = TestBed.createComponent(DosAmigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
