import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego3Component } from './juego3.component';

describe('Juego3Component', () => {
  let component: Juego3Component;
  let fixture: ComponentFixture<Juego3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Juego3Component]
    });
    fixture = TestBed.createComponent(Juego3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
