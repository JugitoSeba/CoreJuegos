import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inicio2Component } from './inicio2.component';

describe('Inicio2Component', () => {
  let component: Inicio2Component;
  let fixture: ComponentFixture<Inicio2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Inicio2Component]
    });
    fixture = TestBed.createComponent(Inicio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
