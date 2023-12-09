import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarComponent } from './cerrar.component';

describe('CerrarComponent', () => {
  let component: CerrarComponent;
  let fixture: ComponentFixture<CerrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CerrarComponent]
    });
    fixture = TestBed.createComponent(CerrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
